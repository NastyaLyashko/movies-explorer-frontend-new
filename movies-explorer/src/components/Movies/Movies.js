import './Movies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies ({ signIn, searchFilm, cards, handleLikeCard, handleDeleteCard, savedMovies, filteredMovies, onCheckbox, onAddMovies, numberOfMovies, isLoading }) {

    return (
        <>
            <Header disable={false} signIn={signIn} />
            <section className='movies'>
                <SearchForm searchFilm={searchFilm} cards={cards} onCheckbox={onCheckbox} />
                <MoviesCardList movieSaved={false} 
                                cards={filteredMovies}
                                savedMovies={savedMovies}
                                handleLikeCard={handleLikeCard}
                                handleDeleteCard={handleDeleteCard}
                                numberOfMovies={numberOfMovies}
                                onAddMovies={onAddMovies}
                                isLoading={isLoading} />
            </section>
            <Footer />
        </>
    )
}

export default Movies;