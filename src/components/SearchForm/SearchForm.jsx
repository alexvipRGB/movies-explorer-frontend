import { useEffect, useState } from 'react';

import './SearchForm.css'

import Checkbox from '../Checkbox/Checkbox';

import { EMPTY_FIELD } from '../../utils/constants';

const SearchForm = ({ search, handleSubmit, isRequired = true, isEmptyField, handleShortsClick, war }) => {
  const [searchValue, setSearchValue] = useState(search.querry);
  const [isShortsFilmChecked, setIsShortsFilmChecked] = useState(search.includeShorts);
  war = searchValue;

  function handleChange({ target }) {
    setSearchValue(target.value);
  }

  function handleShortsCheck() {
    setIsShortsFilmChecked(!isShortsFilmChecked);
    handleShortsClick();
  }

  useEffect(() => {
    setSearchValue(search.querry);
    setIsShortsFilmChecked(search.includeShorts);
  }, [search])

  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form' onSubmit={handleSubmit} noValidate>
          <div className='search__fieldset'>
            <div className='search__poisk'></div>
            <input
              className='search__input'
              name='querry'
              type='text'
              placeholder='Фильм'
              onChange={handleChange}
              value={searchValue}
              required={isRequired}
            />
            <button className='search__button' type='submit' />
          </div>
          <div className='search__line'></div>
          <span className='search__error'>
            {
              isEmptyField ? EMPTY_FIELD : ''
            }
          </span>
          <Checkbox
            checkHandler={handleShortsCheck}
            isChecked={isShortsFilmChecked}
          />
        </form>
        <span className='search__big-error'>
          {
            isEmptyField ? EMPTY_FIELD : ''
          }
        </span>
      </div>
    </section>
  )
};

export default SearchForm;