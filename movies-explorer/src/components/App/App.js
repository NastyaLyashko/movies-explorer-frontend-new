import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, withRouter, useHistory } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'; 
import { register, authorize, getContent, api } from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function App() {

  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (data) => {
    const { name, email, password } = data;
    return register(name, email, password)
        .then((res) => {
            if (!res || res.statusCode === 400) {
                throw new Error('Что-то не так с регистрацией');
            }
            if (res) {
              history.push('/signin');
              setErrorMessage('');
            }
        })
        .catch(err => {
            console.log(err);
            setErrorMessage('Не удалось зарегестрироваться')
        })
  }

  const [errorLoginMessage, setErrorLoginMessage] = useState('');

  const handleLogin = (data) => {
    const { email, password } = data;
    return authorize(email, password)
        .then((res) => {
            if (!res || res.statusCode === 401) {
                throw new Error('Пользователь не зарегесрирован');
            }
            if (!res || res.statusCode === 400) {
                throw new Error('Не передано одно из полей ');
            }
            if (res.token) {
                localStorage.setItem('jwt', res.token);
                api.setToken(res.token);
                getContent(res.token)
                    .then((res) => {
                        if (res){
                        setLoggedIn(true);
                        setCurrentUser(res);
                        history.push('/movies');
                        setErrorLoginMessage('');
                        }
                    });
            }
        })
        .catch((err) => {
            console.log(err);
            setErrorLoginMessage('Не удалось войти в аккаунт')
        })
  }

  const [message, setMessage] = useState('')

  function handleUpdateUser(data) {
    api.patchUserData(data)
        .then((userData) => {
            setCurrentUser(userData);
            setMessage('Профиль удачно обновлен')
        })
        .catch(err => {
            setMessage('Профиль не удалось обновить')
            console.log(err);
        })
  }

    const [windowWidth, setWindowWidth] = useState();
    useEffect(() => {
      function handleResize() {
        if ( window.innerWidth !== windowWidth){
          setWindowWidth(window.innerWidth);
        }
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]); 


  const [cards, setCards] = useState([]);

  function handleGetMovies() {
      const allMovies = JSON.parse(localStorage.getItem('allMovies'));
      if(!allMovies) {
          getMovies()
          .then((res) => {
              localStorage.setItem('allMovies', JSON.stringify(res));
              setCards(JSON.parse(localStorage.getItem('allMovies')));
          })
          .catch(err => {
              console.log(err);
          })
      }
      setCards(allMovies);
      setFilteredMovies(allMovies);
  }

  const [checkboxChecked, setCheckboxChecked] = React.useState(true); 

  function filterMoviesArray(cards, searchSrting) {    
    const filteredMovies = cards.filter((card) => {
      return card.nameRU.toLowerCase().includes(searchSrting);
    });
    if(checkboxChecked) {
      setCheckboxChecked(false);
      return handleShortFilms(filteredMovies);
    }
    return filteredMovies;
  }

  function handleShortFilms(movieList) {
    return movieList.filter((movie) => {
      return movie.duration <= 40;
    });
  }

  function handleCheckbox() {
    setCheckboxChecked(true);
  }

  const [filteredMovies, setFilteredMovies] = useState([]);

  const [isLoading, setLoading] = useState(false)

  function handleSearchFilm(cards, searchString) {
      setLoading(true);
      setTimeout(() => {
        handleGetMovies();
        const movies = filterMoviesArray(cards, searchString.toLowerCase());
        localStorage.setItem('filteredMovies', JSON.stringify(movies));
        setFilteredMovies(movies);
        setLoading(false)
      }, 1000)
  }

  const [numberOfMovies, setNumberOfMovies] = React.useState();
  const [numberOfAddedMovies, setNumberOfAddedMovies] = React.useState()

  useEffect(() => {
    if (windowWidth >= 1100) {
      setNumberOfMovies(12);
      setNumberOfAddedMovies(3);
    } 
    if (windowWidth >= 510 && windowWidth < 1100) {
      setNumberOfMovies(8);
      setNumberOfAddedMovies(2);
    }
    if (windowWidth < 510) {
      setNumberOfMovies(5);
      setNumberOfAddedMovies(2);
    }
  }, [windowWidth])

  function handleAddMovies () {
      setNumberOfMovies(numberOfMovies + numberOfAddedMovies);
  }

  const [savedMovies, setSavedMovies] = useState([]);
  

  function handleGetSavedMovies() {
    api.getSavedMovies()
        .then((res) => {
          setSavedMovies(res.data);
          setFilteredSavedMovies(res.data);
        })
        .catch(err => {
            console.log(err);
        })
  }

  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  function handleSearchSavedFilm(cards, searchSrting) {
    setLoading(true);
    setTimeout(() => {
      const movies = filterMoviesArray(cards, searchSrting.toLowerCase());
      setFilteredSavedMovies(movies);
      setLoading(false)
    }, 1000)
  }

  function handleLikeCard(card) {
      api.postMovie(card)
      .then((newMovie) => {
          setSavedMovies([newMovie.data, ...savedMovies]);
          setFilteredSavedMovies([newMovie.data, ...savedMovies]);
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  function handleDeleteCard(card) {
    api.deleteMovie(card._id)
    .then(() => {
        const newCards = savedMovies.filter((c) => c._id !== card._id);
        setSavedMovies(newCards);
        setFilteredSavedMovies(newCards);
    })
    .catch(err => {
        console.log(err);
    })
  }

useEffect(() => {
  if (loggedIn) {
      api.getUserData()
        .then((userData) => {
            setCurrentUser(userData);
        })
        .then(() => {
          handleGetMovies();
          handleGetSavedMovies();
          history.push('/movies');
        })
        .catch(err => {
            console.log(err)
        })
  }
}, [history, loggedIn])

useEffect(() => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
      api.setToken(jwt);
      getContent(jwt)
      .then((res) => {
          if (res){
              setLoggedIn(true);
          }
      })
      .catch(err => {
        console.log(err)
    })
  }
}, []);

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('allMovies');
    localStorage.removeItem('filteredMovies');
    setLoggedIn(false);
    history.push('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
      <Switch>
        <ProtectedRoute path="/movies" component={Movies} 
                                        signIn={loggedIn} 
                                        searchFilm={handleSearchFilm} 
                                        cards={cards}
                                        savedMovies={savedMovies}
                                        handleLikeCard={handleLikeCard}
                                        handleDeleteCard={handleDeleteCard}
                                        filteredMovies={filteredMovies}
                                        onCheckbox={handleCheckbox}
                                        onAddMovies={handleAddMovies}
                                        numberOfMovies={numberOfMovies}
                                        isLoading={isLoading} />
        <ProtectedRoute path="/saved-movies" component={SavedMovies} 
                                              signIn={loggedIn} 
                                              searchFilm={handleSearchSavedFilm} 
                                              cards={savedMovies}
                                              savedMovies={savedMovies}
                                              handleLikeCard={handleDeleteCard}
                                              handleDeleteCard={handleDeleteCard}
                                              filteredMovies={filteredSavedMovies}
                                              onCheckbox={handleCheckbox}
                                              isLoading={isLoading} />
        <ProtectedRoute path="/profile" component={Profile} signIn={loggedIn} onUpdateUser={handleUpdateUser} onSignOut={handleSignOut} message={message} />
        <Route exact path="/">
          <Main signIn={loggedIn}/>
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegister} errorMessage={errorMessage} />
        </Route>
        <Route path="/signin">
          <Login onLogin={handleLogin} errorMessage={errorLoginMessage} />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
        <Route>
                {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
            </Route> 
      </Switch>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
