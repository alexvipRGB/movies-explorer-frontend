import React from 'react';

import './SearchForm.css';

import Checkbox from '../Checkbox/Checkbox';

function SearchForm({ onSearch }) {
  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form'>
          <div className='search__poisk'></div>
          <input className='search__input' id='search-input' type='text' placeholder='Фильм' required></input>
          <button className='search__button' type='submit' onClick={onSearch}></button>
          <div className='search__line'></div>
        </form>
        <Checkbox />
      </div>
    </section>
  );
}

export default SearchForm;