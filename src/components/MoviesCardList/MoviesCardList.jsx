import { useState } from 'react';

import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';

function MoviesCardList({ moviesData }) {
  const location = useLocation();

  return (
    <section className='movies-container'>
      {
        moviesData.length > 0
          ? <ul className='movies-list'>
            {
              moviesData.map((movie) => (
                <MoviesCard
                  key={
                    location.pathname === '/movies'
                      ? movie.id
                      : movie._id
                  }
                  movieData={movie}
                />
              ))
            }
          </ul>
          : SearchForm = window.location.search !== '' ? <span className='movies-list__error'>Ничего не найдено</span> : ''
      }
    </section>
  )
}

export default MoviesCardList;