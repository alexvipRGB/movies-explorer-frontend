import React from 'react';

import './AboutMe.css';

import photo from '../../images/foto.jpg';

function AboutMe() {
  return (
    <section className='about' id='about'>
      <div className='about__container'>
        <h2 className='about__title'>Студент</h2>
        <div className='about__content'>
          <article className='about__article'>
            <h3 className='about__name'>Алексей</h3>
            <p className='about__description'>Фронтенд-разработчик, 27 лет</p>
            <p className='about__paragraph'>Я родился в Нижневартовске живу в Краснодаре, получил образование в области IT технологий ИВиТ. Люблю слушать музыку, увлекаюсь плаванием, пением, хочу научиться играть на гитаре. Хочу начать работать после обучения в компании на професии Веб-разработчик.
            </p>
            <a href='https://github.com/alexvipRGB' className='about__link' target='_blank' rel="noreferrer">Github</a>
          </article>
          <img src={photo} className='about__photo' alt='фото студента' />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;