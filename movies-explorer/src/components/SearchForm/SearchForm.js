import React from 'react';
import './SearchForm.css';

function SearchForm ({ cards, searchFilm, onCheckbox }) {

    const [searchString, setSearchString] = React.useState('');

    function handleInput (evt) {
      setSearchString(evt.target.value);
    }

    function handleSubmit(evt) {
      evt.preventDefault();
      searchFilm(cards, searchString)
    }

    function handleCheckbox(evt) {
        evt.preventDefault();
        onCheckbox();
        searchFilm(cards, searchString);
    }

    return (
        <section className='search'>
            <form className='search__form'>
                <label className='search__container'>
                    <input className='search__input' onChange={handleInput}
                        placeholder="       Фильм"
                        type="text"
                        required />
                    <button type='submit' className='search__submit-button' onClick={handleSubmit}>Найти</button>
                </label>
                <div className='search__container search__container_checkbox'>
                    <label htmlFor="checkbox" className="search__switch">
                        <input type="checkbox" id="checkbox" className='search__checkbox' onClick={handleCheckbox} />
                        <span className="search__slider"></span>
                    </label>
                    <p className='search__text'>Короткометражки</p>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;