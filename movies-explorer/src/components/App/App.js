import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile userName='Виталий' email='pochta@yandex.ru' />
        </Route>
        <Route path="/signup">
          <Register name='' email='' password=''/>
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
