import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.css';

import { mainApi } from '../../utils/MainApi';
import { useCurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useFormValidation';
import { CHANGE_SUCCESS, PATTERN_EMAIL } from '../../utils/constants';

function Profile({ changeStatus }) {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();
  const { currentUser, setCurrentUser } = useCurrentUserContext();
  const [isValue, setIsValue] = useState(true);
  const [message, setMessage] = useState('');
  const [isFormChanging, setIsFormChanging] = useState(false);
  const nameInputRef = useRef(null);

  function handleSubmit(evt) {
    evt.preventDefault();
    mainApi.setUserInfo(values)
      .then(updatedUserData => {
        setCurrentUser(updatedUserData);
        setMessage(CHANGE_SUCCESS);
      })
      .catch(err => {
        setMessage(err);
      })
      .finally(() => {
        setIsValue(true);
      })

    setIsFormChanging(false);
  }

  function handleMakeChangeable() {
    setIsFormChanging(true);
    setMessage('');
  }

  function handleLogout() {
    mainApi.logoutUser()
      .then(() => {
        setCurrentUser({ name: '', email: '' });
        localStorage.removeItem('currentId');
        localStorage.removeItem('search');
        changeStatus(false);
        navigate('/', { replace: true });
      })
  }

  useEffect(() => {
    if (!isFormChanging) return;
    nameInputRef.current.focus();

  }, [isFormChanging])

  useEffect(() => {
    if (!currentUser.name) return;
    resetForm(false, { name: currentUser.name, email: currentUser.email });

  }, [currentUser, resetForm])


  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValue(true);
    } else {
      setIsValue(false);
    }
  }, [currentUser, values])

  return (
    <main className='profile main-container'>
      <h3 className='profile__title'>{`Привет, ${currentUser.name}!`}</h3>
      <form className='profile__form' name="profile__form" onSubmit={handleSubmit} noValidate>
        <div className='profile__field-wrapper'>
          <label className='profile__field'>
            Имя
            <input
              className='profile__input'
              name='name'
              type='text'
              placeholder='Имя'
              minLength={2}
              maxLength={30}
              required
              autoComplete='off'
              ref={nameInputRef}
              disabled={!isFormChanging}
              value={values.name || ''}
              onChange={handleChange} />
          </label>
          <span className='profile__error'>{errors.name}</span>
          <div className='profile__line'></div>
          <label className='profile__field'>
            E-mail
            <input
              className='profile__input'
              name='email'
              type='email'
              placeholder='E-mail'
              required
              autoComplete='off'
              disabled={!isFormChanging}
              value={values.email || ''}
              onChange={handleChange}
              pattern={PATTERN_EMAIL} />
          </label>
          <span className='profile__error'>{errors.email}</span>
        </div>

        <span className='profile__server-error'>{message}</span>
        {
          isFormChanging
            ? <button className='profile__submit-button' type='submit' disabled={isValue || !isValid}>
              Сохранить
            </button>
            : <div className='profile__buttons'>
              <button className='profile__button profile__button_type_edit' type='button' onClick={handleMakeChangeable}>
                Редактировать
              </button>
              <button className='profile__button profile__button_type_logout' type='button' onClick={handleLogout}>
                Выйти из аккаунта
              </button>
            </div>
        }
      </form>
    </main>
  );
}

export default Profile;