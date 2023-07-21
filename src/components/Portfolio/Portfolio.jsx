import React from 'react';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list-container'>
          <li className='portfolio__list-container portfolio__list-container_item'>
            <a
              href='https://alexviprgb.github.io/how-to-learn/'
              className='portfolio__list-container portfolio__list-container_item-link'
              target='_blank'
              rel='noreferrer'>
              <p className='portfolio__list-container portfolio__list-container_title'>Статичный сайт</p>
              <span className='portfolio__list-container portfolio__list-container_icon'>↗</span>
            </a>
          </li>
          <li className='portfolio__list-container portfolio__list-container_item'>
            <a
              href='https://alexviprgb.github.io/russian-travel/'
              className='portfolio__list-container portfolio__list-container_item-link'
              target='_blank'
              rel='noreferrer'>
              <p className='portfolio__list-container portfolio__list-container_title'>Адаптивный сайт</p>
              <span className='portfolio__list-container portfolio__list-container_icon'>↗</span>
            </a>
          </li>
          <li className='portfolio__list-container portfolio__list-container_item'>
            <a
              href='https://alexviprgb.github.io/react-mesto-auth/'
              className='portfolio__list-container portfolio__list-container_item-link'
              target='_blank'
              rel='noreferrer'>
              <p className='portfolio__list-container portfolio__list-container_title'>Одностраничное приложение</p>
              <span className='portfolio__list-container portfolio__list-container_icon'>↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;