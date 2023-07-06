import React from 'react';

import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard({ card }) {
  const location = useLocation(); // состояние кнопки

  const [isCardAdd, setIsCardAdd] = React.useState(card.saved); // состояние карточки

  const handleAddSave = () => { // добавление карточки в избранное
    setIsCardAdd(!isCardAdd);
  };

  return (
    <li className='movies-card'>
      <article className='movies-card__item'>
        <div className='movies-card__info'>
          <div className='movies-card__description'>
            <h2 className='movies-card__title'>{card.title}</h2>
            <span className='movies-card__duration'>{card.duration}</span>
          </div>
          {location.pathname === '/movies' && (
            <button className={`movies-card__button movies-card__button_type_${!isCardAdd ? 'add' : 'added'}`} type='button' onClick={handleAddSave}></button>
          )}
          {location.pathname === '/saved-movies' && (
            <button className='movies-card__button movies-card__button_type_delete' type='button'></button>
          )}
        </div>
        <img className='movies-card__poster' src={card.poster} alt={card.title} />
      </article>
    </li>
  );
}

export default MoviesCard;