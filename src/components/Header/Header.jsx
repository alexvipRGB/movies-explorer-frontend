import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import Navigation from '../Navgation/Navigation';
import NavigationAuth from '../NavigationAuth/NavigationAuth';

import logo from '../../images/logo/logo.svg';

function Header({loggedIn}) {
    return (
        <header className={`header ${!loggedIn ? 'header_type_auth' : ''}`}>
            <Link to='/' className='header__link'>
                <img className='header__logo' src={logo} alt='логотип'></img>
            </Link>
            {!loggedIn && <NavigationAuth />}
            {loggedIn && <Navigation />}
        </header>
    );
}

export default Header;