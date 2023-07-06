import React from 'react';

import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ moviesList }) {
  return (
    <main className='saved-movies main-container'>
      <SearchForm />
      <MoviesCardList moviesList={moviesList} />
    </main>
  );
}

export default SavedMovies;