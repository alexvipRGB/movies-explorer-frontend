import React from 'react';

import './Register.css';

import AuthForm from '../AuthForm/AuthForm';

function Register() {
  return (
    <AuthForm
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      text='Уже зарегистрированы?'
      linkText='Войти'
      link='/signin'>
      <label className='form__field'>
        Имя
        <input className='form__input' type='text' placeholder='Алексей' minLength='2' maxLength='40' required />
        <span className='form__error'>Что-то пошло не так...</span>
      </label>
      <label className='form__field'>
        Email
        <input className='form__input' type='email' placeholder='*******@******.**' required />
        <span className='form__error'>Что-то пошло не так...</span>
      </label>
      <label className='form__field'>
        Пароль
        <input className='form__input' type='password' placeholder='********' autoComplete='on' required/>
        <span className='form__error'>Что-то пошло не так...</span>
      </label>
    </AuthForm>
  )
};

export default Register;