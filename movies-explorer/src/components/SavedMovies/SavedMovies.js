import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies () {
    return (
        <>
            <Header disable={false}  signIn={true}/>
            <section className='movies'>
                <SearchForm />
                <MoviesCardList movieSaved={true} />
            </section>
            <Footer />
        </>
    )
}

export default SavedMovies;