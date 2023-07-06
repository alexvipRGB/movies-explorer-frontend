import React from 'react';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__list_item'>
            <a
              href='https://alexviprgb.github.io/how-to-learn/'
              className='portfolio__list_link'
              target='_blank'
              rel='noreferrer'>
              <p className='portfolio__list_title'>Статичный сайт</p>
              <span class='portfolio__list_icon'>↗</span>
            </a>
          </li>
          <li className='portfolio__list_item'>
            <a
              href='https://alexviprgb.github.io/russian-travel/'
              className='portfolio__list_link'
              target='_blank'
              rel='noreferrer'>
              <p className='portfolio__list_title'>Адаптивный сайт</p>
              <span class='portfolio__list_icon'>↗</span>
            </a>
          </li>
          <li className='portfolio__list_item'>
            <a
              href='https://alexviprgb.github.io/react-mesto-auth/'
              className='portfolio__list_link'
              target='_blank'
              rel='noreferrer'>
              <p className='portfolio__list_title'>Одностраничное приложение</p>
              <span className='portfolio__list_icon'>↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;