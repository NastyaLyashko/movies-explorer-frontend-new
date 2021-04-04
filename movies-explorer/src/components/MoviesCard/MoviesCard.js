import './MoviesCard.css';

function MoviesCard ({ movieSours, movieName, movieDuration, movieSaved }) {
    return (
        <>
            <li className="card">
                <img className="card__image" src={movieSours} alt='Постер фильма'/>
                <div className="card__info">
                    <h3 className="card__text">{movieName}</h3>
                    <button type="button" className={`${movieSaved ? 'card__delete-button' : 'card__like-button card__like-button_active'}`} aria-label='Лайк'></button>
                    <p className="card__duration">{movieDuration}</p>
                </div>
            </li>
        </>
    )
}

export default MoviesCard;