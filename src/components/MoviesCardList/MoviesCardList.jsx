import React from 'react';

import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList }) {
  const location = useLocation();

  return (
    <>
      <section className='movies-container'>
        <ul className='movies-list'>
          {
            moviesList
              .map((card) => <MoviesCard key={card._id} card={card} />)}
        </ul>
        {location.pathname === '/movies' && (
          <button className='movies-list__button'>Ещё</button>
        )}
      </section>
    </>
  );
}

export default MoviesCardList;