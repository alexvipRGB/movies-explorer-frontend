import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

import { BEATFILM_URL } from '../../utils/constants';
import { mainApi } from '../../utils/MainApi';

import { convertDuration } from '../../utils/utils';
import { useMoviesContext } from '../../contexts/CurrentMoviesContext';

import Popup from '../Popup/Popup';
import PopupContent from '../PopupConteiner/PopupConteiner';


function MoviesCard({ movieData }) {
  const location = useLocation();
  const { savedMovies, setSavedMovies } = useMoviesContext();
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [text, setText] = useState('');

  function saveMovieHandler() {
    const saveMoviesData = {
      ...movieData,
      image: `${BEATFILM_URL}${movieData.image.url}`,
      thumbnail: `${BEATFILM_URL}${movieData.image.formats.thumbnail.url}`,
      movieId: movieData.id,
    };
    delete saveMoviesData.id;
    delete saveMoviesData.created_at;
    delete saveMoviesData.updated_at;

    mainApi.addMovie(saveMoviesData)
      .then(movie => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch(err => {
        setIsPopupOpen(true);
        setText(err);
      })
  }

  function deleteMovieHandler() {
    const deleteParam = location.pathname === '/movies'
      ? movieData.id
      : movieData.movieId;
    const deleteMovie = savedMovies.find(movie => movie.movieId === deleteParam);
    mainApi.deleteMovie(deleteMovie._id)
      .then(movies => {
        setSavedMovies(savedMovies.filter(movie => movie._id !== movies.movies._id));
      })
      .catch(err => {
        setIsPopupOpen(true);
        setText(err);
      })
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
    setText('');
  }

  useEffect(() => {
    setIsMovieSaved(savedMovies.some(movie => movie.movieId === movieData.id || movie.movieId === movieData.movieId));
  }, [savedMovies, movieData])

  return (
    <li className='movies-card'>
      <Popup isOpen={isPopupOpen}>
        <PopupContent onClose={handlePopupClose} text={text} />
      </Popup>

      <article className='movies-card__item'>
        <div className='movies-card__info'>
          <div className='movies-card__description'>
            <h2 className='movies-card__title'>{movieData.nameRU}</h2>
            <span className='movies-card__duration'>{convertDuration(+movieData.duration)}</span>
          </div>
          {location.pathname === '/movies' && (
            <button className={`movies-card__button movies-card__button_type_${isMovieSaved ? 'added' : 'add'}`} type='button' onClick={isMovieSaved ? deleteMovieHandler : saveMovieHandler}></button>
          )}
          {location.pathname === '/saved-movies' && (
            <button className={`${isMovieSaved ? 'movies-card__button movies-card__button_type_delete' : ''}`} type='button' onClick={deleteMovieHandler}></button>
          )}
        </div>
        <a className='movies-card__trailer' href={movieData.trailerLink} target='_blank' rel='noreferrer'>
          <img
            className='movies-card__poster'
            src={
              location.pathname === '/movies'
                ? `${BEATFILM_URL}/${movieData.image.url}`
                : movieData.image
            }
            alt={movieData.nameRU}
          />
        </a>
      </article>
    </li>
  );
}

export default MoviesCard;