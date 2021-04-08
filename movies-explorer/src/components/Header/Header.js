import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation'

function Header ({ disable, signIn, main }) {
    return (
        <header className={`${disable ? "header_sign" : ""} ${main ? "header_main" : ""}  header`}>
            <NavLink exact to='/' className={`${disable ? "header__logo_sign" : ""} header__logo`}>
                <img src={logo} alt='logo'/>
            </NavLink>
            <Navigation disable={disable} signIn={signIn}/>
        </header>
    )
}

export default Header;