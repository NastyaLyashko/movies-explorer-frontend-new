import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio () {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__links'>
                <li className='portfolio__link'>Статичный сайт
                    <Link to='#' className='portfolio__link-arrow'>&#129133;</Link>
                </li>
                <li className='portfolio__link'>Адаптивный сайт
                    <Link to='#' className='portfolio__link-arrow'>&#129133;</Link>
                </li>
                <li className='portfolio__link'>Одностраничное приложение
                    <Link to='#' className='portfolio__link-arrow'>&#129133;</Link>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;