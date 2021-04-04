import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

function Header ({ disable }) {
    return (
        <header className={`${disable ? "header_sign" : ""} header`}>
            <NavLink exact to='/' className={`${disable ? "header__logo_sign" : ""} header__logo`}>
                <img src={logo} alt='logo'/>
            </NavLink>
            <div className={`${disable ? "header__links_sign" : ""} header__links`}>
                <NavLink to='/movies' className='header__link' activeClassName='header__link_active'>Фильмы</NavLink>
                <NavLink to='/saved-movies' className='header__link' activeClassName='header__link_active'>Сохранённые фильмы</NavLink>
                <NavLink to='/profile' className='header__link header__link_profile' activeClassName='header__link_active'>Аккаунт
                    <div className='header__avatar'></div>
                </NavLink>
            </div>

        </header>
    )
}

export default Header;