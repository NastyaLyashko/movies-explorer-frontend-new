import './SearchForm.css';

function SearchForm () {
    return (
        <>
            <section className='search'>
                <form className='search__form'>
                    <label className='search__container'>
                        <input className='search__input'
                            placeholder="       Фильм"
                            type="text" />
                        <button type='submit' className='search__submit-button'>Найти</button>
                    </label>
                    <div className='search__container search__container_checkbox'>
                        <label htmlFor="checkbox" className="search__switch">
                            <input type="checkbox" id="checkbox" className='search__checkbox' required/>
                            <span className="search__slider"></span>
                        </label>
                        <p className='search__text'>Короткометражки</p>
                    </div>
                </form>
            </section>
        </>
    )
}

export default SearchForm;