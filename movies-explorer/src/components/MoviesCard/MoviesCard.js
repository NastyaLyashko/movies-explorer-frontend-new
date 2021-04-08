import './MoviesCard.css';

function MoviesCard ({ movieSours, movieName, movieDuration, movieSaved }) {
    return (
        <>
            <li className="card">
                <img className="card__image" src={movieSours} alt='Постер фильма'/>
                <div className="card__info">
                    <h3 className="card__text">{movieName}</h3>
                    <button type="button" className={`${movieSaved ? 'card__button_delete' : 'card__button_like card__button_like_active'} card__button`} aria-label='Лайк'></button>
                    <p className="card__duration">{movieDuration}</p>
                </div>
            </li>
        </>
    )
}

export default MoviesCard;