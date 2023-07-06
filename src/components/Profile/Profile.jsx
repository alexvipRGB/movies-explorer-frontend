import React from 'react';

import './Profile.css';

function Profile() {
  return (
    <main className='profile main-container'>
      <h3 className='profile__title'>Привет, Алексей!</h3>
      <form className='profile__form'>
        <label className='profile__field'>
          Имя
          <input className='profile__input' id='name-input' name='name' type='text' minLength="2" maxLength="40" required />
          <span className='profile__error'></span>
        </label>
        <div className='profile__line'></div>
        <label className='profile__field'>
          E-mail
          <input className='profile__input' id='email-input' name='email' type='email' required />
          <span className='profile__error'></span>
        </label>
        <button className='profile__button-save'>Редактировать</button>
        <button className='profile__button-logout'>Выйти из аккаунта</button>
      </form>
    </main>
  );
}

export default Profile;