import React from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ moviesList, onSearch }) {
  return (
    <main className='movies main-container'>
      <SearchForm onSearch={onSearch} />
      <MoviesCardList moviesList={moviesList} />
    </main>
  );
}

export default Movies;