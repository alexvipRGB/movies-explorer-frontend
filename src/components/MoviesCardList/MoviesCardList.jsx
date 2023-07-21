import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import search from '../SearchForm/SearchForm';

function MoviesCardList({ moviesData }) {
  const [searchValue, setSearchValue] = useState(search.querry);
  const location = useLocation();

  useEffect(() => {
    setSearchValue(search.querry);
  }, [search])

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
          : searchValue !== '' ? <span className='movies-list__error'>Ничего не найдено</span> : <span className='movies-list__error'></span>
      }
    </section>
  )
}

export default MoviesCardList;