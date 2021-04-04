import { Link } from 'react-router-dom';
import './AboutMe.css';
import portret from '../../images/portret.svg';

function AboutMe () {
    return (
        <section className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <img className='about-me__portret' src={portret} alt='portret'/>
            <div className='about-me__container'>
                <h3 className='about-me__subtitle'>Виталий</h3>
                <p className='about-me__about'>Фронтенд-разработчик, 30 лет</p>
                <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                    С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                    начал заниматься фриланс-заказами и ушёл с постоянной работы..</p>
                <div className='about-me__connect-links'>
                    <Link to='' className='about-me__connect-link'>Facebook</Link>
                    <Link to='' className='about-me__connect-link'>Github</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;