import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Register.css';

import { mainApi } from '../../utils/MainApi';
import { useCurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useFormValidation';
import { PATTERN_EMAIL } from '../../utils/constants';

import Preloader from '../Preloader/Preloader';

import logo from '../../images/logo/logo.svg';

function Register({ changeStatus }) {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm, inputVilidities } = useFormValidation();
  const { setCurrentUser } = useCurrentUserContext();
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    setMessage('');
    setIsLoading(true);
    mainApi.registerUser(values)
      .then(() => {
        const { email, password } = values;
        resetForm();
        return mainApi.loginUser({ email, password })
      })
      .then((userData) => {
        setCurrentUser(userData);
        changeStatus(true);
        localStorage.setItem('currentId', userData._id);
        navigate('/movies', { replace: true });
      })
      .catch(err => {
        setMessage(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <main className='form'>
      <Link to='/' className='form__logo'>
        <img src={logo} alt='логотип' />
      </Link>
      <h3 className='form__title'>Добро пожаловать!</h3>
      <form className='form__container' name='register' onSubmit={handleSubmit} action='#' noValidate>
        <label className='form__field' htmlFor='name'>
          Имя
          <input
            className={
              inputVilidities.name === undefined || inputVilidities.name ? 'form__input' : 'form__input form__input_type_error'
            }
            type='text'
            name='name'
            id='name'
            placeholder='Имя'
            minLength='2'
            maxLength='40'
            required
            autoComplete='off'
            onChange={handleChange}
            value={values.name || ''} />
          <span className='form__error'>{errors.name}</span>
        </label>
        <label className='form__field' htmlFor='email'>
          Email
          <input
            className={
              inputVilidities.email === undefined || inputVilidities.email ? 'form__input' : 'form__input form__input_type_error'
            }
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            minLength='2'
            maxLength='40'
            required
            autoComplete='off'
            onChange={handleChange}
            value={values.email || ''}
            pattern={PATTERN_EMAIL} />
          <span className='form__error'>{errors.email}</span>
        </label>
        <label className='form__field' htmlFor='password'>
          Пароль
          <input
            className={
              inputVilidities.password === undefined || inputVilidities.password
                ? 'form__input'
                : 'form__input form__input_type_error'
            }
            type='password'
            name='password'
            id='password'
            placeholder='Пароль'
            minLength='6'
            maxLength='100'
            required
            autoComplete='off'
            onChange={handleChange}
            value={values.password || ''} />
          <span className='form__error'>{errors.password}</span>
        </label>
        <span className="form__server-error">{message}</span>
        {
          isLoading
            ? <Preloader />
            : <button
              className={isValid ? 'form__button' : 'form__button form__button_disabled'}
              type='submit'
              disabled={!isValid}
            >
              Зарегистрироваться
            </button>
        }
      </form>
      <p className='form__text'>
        Уже зарегистрированы?
        <Link to='/signin' className='form__link'>Войти</Link>
      </p>
    </main>
  )
};

export default Register;