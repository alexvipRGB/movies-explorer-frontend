import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesData }) {
  const location = useLocation();

  const search = JSON.parse(localStorage.getItem('search'));

  if (localStorage.getItem('search') === null) {
    localStorage.setItem('search', JSON.stringify( { querry: "", includeShorts: false }))
  }

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
          : search.querry !== "" ? <span className='movies-list__error'>Ничего не найдено</span> : ''
      }
    </section>
  )
}

export default MoviesCardList;