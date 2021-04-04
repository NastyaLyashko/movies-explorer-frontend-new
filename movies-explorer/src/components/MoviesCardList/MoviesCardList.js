import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movie1 from '../../images/pic1.png';
import movie2 from '../../images/pic2.svg';
import movie3 from '../../images/pic3.png';
import movie4 from '../../images/pic4.png';
import movie5 from '../../images/pic5.png';
import movie6 from '../../images/pic6.png';

function MoviesCardList ({ movieSaved }) {
    return (
        <>
        <section className='movies-cards'>
            <ul className='movies-cards__list'>
                <MoviesCard className='movies-cards__item' 
                            movieSaved={movieSaved}
                            movieSours={movie1} 
                            movieName='33 слова о дизайне'
                            movieDuration='1ч 47м'/>
                <MoviesCard className='movies-cards__item'
                            movieSaved={movieSaved} 
                            movieSours={movie2} 
                            movieName='Киноальманах «100 лет дизайна»'
                            movieDuration='1ч 47м'/>
                <MoviesCard className='movies-cards__item'
                            movieSaved={movieSaved} 
                            movieSours={movie3} 
                            movieName='В погоне за Бенкси'
                            movieDuration='1ч 47м'/>
                <MoviesCard className='movies-cards__item'
                            movieSaved={movieSaved}
                            movieSours={movie4} 
                            movieName='Баския: Взрыв реальности'
                            movieDuration='1ч 47м'/>
                <MoviesCard className='movies-cards__item'
                            movieSaved={movieSaved} 
                            movieSours={movie5} 
                            movieName='Бег это свобода'
                            movieDuration='1ч 47м'/>
                <MoviesCard className='movies-cards__item'
                            movieSaved={movieSaved} 
                            movieSours={movie6} 
                            movieName='Книготорговцы'
                            movieDuration='1ч 47м'/>
                <MoviesCard className='movies-cards__item'
                            movieSaved={movieSaved} 
                            movieSours={movie1} 
                            movieName='33 слова о дизайне'
                            movieDuration='1ч 47м'/>
                <MoviesCard className='movies-cards__item'
                            movieSaved={movieSaved} 
                            movieSours={movie2} 
                            movieName='Киноальманах «100 лет дизайна»'
                            movieDuration='1ч 47м'/>
                <MoviesCard className='movies-cards__item'
                            movieSaved={movieSaved} 
                            movieSours={movie3} 
                            movieName='В погоне за Бенкси'
                            movieDuration='1ч 47м'/>
                <MoviesCard className='movies-cards__item'
                            movieSaved={movieSaved} 
                            movieSours={movie4} 
                            movieName='Баския: Взрыв реальности'
                            movieDuration='1ч 47м'/>
                <MoviesCard className='movies-cards__item'
                            movieSaved={movieSaved}
                            movieSours={movie5} 
                            movieName='Бег это свобода'
                            movieDuration='1ч 47м'/>
                <MoviesCard className='movies-cards__item'
                            movieSaved={movieSaved}
                            movieSours={movie6} 
                            movieName='Книготорговцы'
                            movieDuration='1ч 47м'/>
            </ul>
            <button className='movies-cards__button'>Ещё</button>
        </section>
    </>
    )
}

export default MoviesCardList;