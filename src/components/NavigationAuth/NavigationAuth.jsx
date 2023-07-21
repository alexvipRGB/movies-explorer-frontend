import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationAuth.css';

function NavigationAuth() {
  return (
    <nav className='navigation-auth'>
      <ul className='navigation-auth__list'>
        <li className='navigation-auth__item'>
          <Link to='/signup' className='navigation-auth__link navigation-auth__link_type_signup'>Регистрация</Link>
        </li>
        <li className='navigation-auth__item'>
          <Link to='/signin' className='navigation-auth__link navigation-auth__link_type_signin'>Войти</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationAuth;