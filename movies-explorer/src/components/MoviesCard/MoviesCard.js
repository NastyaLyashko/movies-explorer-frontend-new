import React, { useState, useEffect } from 'react';
import './MoviesCard.css';
import no_image from '../../images/no-image.png';

function MoviesCard ({ card, movieSaved, handleLikeCard, handleDeleteCard, savedMovies }) {

    const imgsrc = () => {
        if(card.image) {
            return     `${
                movieSaved ? `${card.image}` : `https://api.nomoreparties.co${card.image.url}`
            }`;
        } else {
            return null;
        }
    }
    


    const duration = () => {
        if (card.duration > 60) {
            return (card.duration / 60 | 0) + " ч " + card.duration % 60 + " м";
        } 
        if (card.duration === 60) {
            return (card.duration / 60) + " ч";
        } else {
            return card.duration + " м";
        }
    }

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const savedCard = savedMovies.find((movie) => movie.movieId === card.id);
        if (savedCard) {
            setIsLiked(true);
        }
    }, [setIsLiked, card, savedMovies]);

    const likeButtonClassName = `${
        isLiked ? "card__button_like_active" : "card__button_like"
    }`;

    function handleLikeClick() {
        if(!isLiked) {
            handleLikeCard(card);
            setIsLiked(true);
        } else {
            const savedCard = savedMovies.find((movie) => movie.movieId === card.id);
            handleDeleteCard(savedCard);
            setIsLiked(false);
        }
    }

    return (
        <li className="card">
            <a className="card__trailer-link" href={card.trailerLink}>
                <img className="card__image" src={card.image ? imgsrc()
                : no_image} alt={`Постер фильма ${card.nameRU}`} />
            </a>
            <div className="card__info">
                <h3 className="card__text">{card.nameRU}</h3>
                <button type="button" className={`${movieSaved ? 'card__button_delete' : ''} ${likeButtonClassName} card__button`} aria-label='Лайк' onClick={handleLikeClick}></button>
                <p className="card__duration">{duration()}</p>
            </div>
        </li>
    )
}

export default MoviesCard;