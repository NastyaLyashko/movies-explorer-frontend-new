import './Promo.css';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import logo from '../../images/landing-logo.png'

function Promo () {
    return (
        <section className='promo'>
            <Header />
            <div className='promo__container'>
                <img src={logo} alt='logo' className='promo__logo'/>
                <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <NavTab />
            </div>
        </section>
    )
}

export default Promo;