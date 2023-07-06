import React from 'react';

import './Login.css';

import AuthForm from '../AuthForm/AuthForm';

function Login() {
  return (
    <AuthForm
        title='Рады видеть!'
        buttonText='Войти'
        text='Ещё не зарегистрированы?'
        linkText='Регистрация'
        link='/signup'>
        <label className='form__field'>
            Email
            <input className='form__input' type='email' placeholder='******@*****.**' required />
            <span className='form__error'>Что-то пошло не так...</span>
        </label>
        <label className='form__field'>
            Пароль
            <input className='form__input' type='password' placeholder='******' autoComplete='on' required/>
            <span className='form__error'>Что-то пошло не так...</span>
        </label>
    </AuthForm>
    )
};

export default Login;