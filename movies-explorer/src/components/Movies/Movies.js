import './Movies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies () {
    return (
        <>
            <Header />
            <section className='movies'>
                <SearchForm />
                <MoviesCardList movieSaved='false'/>
            </section>
            <Footer />
        </>
    )
}

export default Movies;