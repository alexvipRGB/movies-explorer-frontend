import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import Navigation from '../Navigation/Navigation';
import NavigationAuth from '../NavigationAuth/NavigationAuth';

import logo from '../../images/logo/logo.svg';

function Header({ isLogin }) {
  return (
    <header className={`header ${!isLogin ? 'header_type_auth' : ''}`}>
      <Link to='/' className='header__link'>
        <img className='header__logo' src={logo} alt='логотип'></img>
      </Link>
      {!isLogin && <NavigationAuth />}
      {isLogin && <Navigation />}
    </header>
  );
}

export default Header;