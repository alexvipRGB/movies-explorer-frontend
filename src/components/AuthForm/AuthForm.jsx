// Общий компонент для форм регистрации и авторизации пользователя
import React from 'react';
import { Link } from 'react-router-dom';

import './AuthForm.css';

import logo from '../../images/logo/logo.svg';

function AuthForm({ children, title, buttonText, text, linkText, link }) {
    return (
      <div className='form'>
        <Link to='/' className='form__logo'>
          <img src={logo} alt='логотип' />
        </Link>
        <h3 className='form__title'>{title}</h3>
        <form className='form__container'>
          {children}
          <button className='form__button' type='submit'>{buttonText}</button>
        </form>
        <p className='form__text'>
          {text}
          <Link to={link} className='form__link'>{linkText}</Link>
        </p>
      </div>
    );
  }

  export default AuthForm;