import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies ({ signIn, searchFilm, cards, handleDeleteCard, savedMovies, filteredMovies, onCheckbox, isLoading  }) {

    return (
        <>
            <Header disable={false}  signIn={signIn}/>
            <section className='movies'>
                <SearchForm searchFilm={searchFilm} cards={savedMovies} onCheckbox={onCheckbox} />
                <MoviesCardList movieSaved={true}
                                cards={filteredMovies}
                                savedMovies={savedMovies}
                                handleLikeCard={handleDeleteCard}
                                handleDeleteCard={handleDeleteCard}
                                isLoading={isLoading} />
            </section>
            <Footer />
        </>
    )
}

export default SavedMovies;