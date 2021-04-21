import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList ({ movieSaved, cards, handleLikeCard, handleDeleteCard, savedMovies, onAddMovies, numberOfMovies, isLoading }) {
    if (!cards){
        return null
    }
    if(isLoading){
        return <Preloader />
    }
    if (!cards.length) {
        return <section className='movies-cards'>
                    <span className='movies-cards__message'>Ничего не найдено</span>
                </section>
    }

    return (
        <section className='movies-cards'>
            <ul className='movies-cards__list'>
                {cards.slice(0, numberOfMovies).map((card) => (
                    <MoviesCard  key={card.id || card._id} 
                                card={card} 
                                movieSaved={movieSaved}
                                savedMovies={savedMovies}
                                handleLikeCard={handleLikeCard}
                                handleDeleteCard={handleDeleteCard} />
                ))}
            </ul>
            <button className={`${cards.length > numberOfMovies ? 'movies-cards__button_active' : 'movies-cards__button'}`} onClick={onAddMovies}>Ещё</button>
        </section>
    )
}

export default MoviesCardList;