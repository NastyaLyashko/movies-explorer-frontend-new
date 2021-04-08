import './Portfolio.css';

function Portfolio () {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__links'>
                <li className='portfolio__link'>Статичный сайт
                    <a href='https://nastyalyashko.github.io/how-to-learn/' className='portfolio__link-arrow'>&#8599;</a>
                </li>
                <li className='portfolio__link'>Адаптивный сайт
                    <a href='https://nastyalyashko.github.io/russian-travel/' className='portfolio__link-arrow'>&#8599;</a>
                </li>
                <li className='portfolio__link'>Одностраничное приложение
                    <a href='https://lyashkoay.students.nomoreparties.space' className='portfolio__link-arrow'>&#8599;</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;