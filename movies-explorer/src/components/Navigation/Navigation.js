import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation ({ disable, signIn }) {

    const [isBurgerMenuOpen, setisBurgerMenuOpen] = React.useState(false);

    function onBurgerMenuOpen() {
        setisBurgerMenuOpen(true)
    }

    return (
        <section className='navigation'>
            <div className={`${signIn ? 'navigation__main-container' : 'navigation__main-container_active'}`}>
                <NavLink to="/signup" className='navigation__link_main-page navigation__link'>Регистрация</NavLink>
                <NavLink to="/signin" className='navigation__link_main-page navigation__link navigation__link_black'>Войти</NavLink> 
            </div>
            <div className={`${isBurgerMenuOpen ? 'navigation__popup_burger' : ''} ${disable ? "navigation__popup_disable" : ''} navigation__popup`}>
                <div className='navigation__links-container'>
                    <div className={`${isBurgerMenuOpen ? 'navigation__burger_active' : ''} navigation__burger`} onClick={onBurgerMenuOpen}>
                        <span className={`${isBurgerMenuOpen ? 'navigation__burger_span_active' : ''}navigation__burger_span`}></span>
                    </div>
                    <div className={`${isBurgerMenuOpen ? 'navigation__links_active' : ''} navigation__links`}>
                            <NavLink exact to='/' className='navigation__link navigation__link_main' activeClassName='navigation__link_active'>Главная</NavLink>
                            <NavLink to='/movies' className='navigation__link' activeClassName='navigation__link_active'>Фильмы</NavLink>
                            <NavLink to='/saved-movies' className='navigation__link' activeClassName='navigation__link_active'>Сохранённые фильмы</NavLink>
                            <NavLink to='/profile' className={`${isBurgerMenuOpen ? 'navigation__link_profile_bottom' : ''} navigation__link navigation__link_profile`} activeClassName='navigation__link_active'>Аккаунт
                                <div className='navigation__avatar'></div>
                            </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navigation;