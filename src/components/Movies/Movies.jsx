import { useEffect, useState } from 'react';

import './Movies.css';

import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/moviesApi';
import { getCardsAmount, movieFilter } from '../../utils/utils';
import { useDebounce } from '../../hooks/useDebounce';
import { useMoviesContext } from '../../contexts/CurrentMoviesContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Popup from '../Popup/Popup';
import PopupContent from '../PopupConteiner/PopupConteiner';

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [cardsAmount, setCardsAmount] = useState(getCardsAmount());
  const [isMoveButtonVisible, setIsMoveButtonVisible] = useState(true);
  const [search, setSearch] = useState({ querry: '', includeShorts: false });
  const [searchedMovies, setSearchedMovies] = useState([]);
  const { setSavedMovies } = useMoviesContext();
  const [isEmptyField, setIsEmptyField] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [text, setText] = useState('');
  const debouncedResize = useDebounce(handleResize);

  function handleSearchSubmit(evt) {
    evt.preventDefault();

    const { querry, shorts } = evt.target.elements;

    if (!querry.value) {
      setIsEmptyField(true);
      return;
    }
    setIsEmptyField(false);
    const MovieSearch = { querry: querry.value, includeShorts: shorts.checked };
    localStorage.setItem('search', JSON.stringify(MovieSearch));
    setSearch(MovieSearch);
  }

  function handleMoreMovies() {
    const moviesToShow = searchedMovies.slice(displayMovies.length, displayMovies.length + cardsAmount.extraCards);
    setDisplayMovies([...displayMovies, ...moviesToShow]);
  }

  function handleResize() {
    setCardsAmount(getCardsAmount());
  }

  function handleShortsClick() {
    const newSearch = { ...search, includeShorts: !search.includeShorts };
    localStorage.setItem('search', JSON.stringify(newSearch));
    setSearch(newSearch);
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
    setText('');
  }

  useEffect(() => {
    const search = JSON.parse(localStorage.getItem('search'));
    if (search) setSearch(search);
    const storageMovies = JSON.parse(localStorage.getItem('movies'));
    if (storageMovies) {
      setAllMovies(storageMovies);
      return;
    }
    setIsLoading(true);
    moviesApi.getMovies()
      .then(movies => {
        setAllMovies(movies);
        localStorage.setItem('movies', JSON.stringify(movies));
      })
      .catch(err => {
        setIsPopupOpen(true);
        setText(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])

  useEffect(() => {
    setIsLoading(true);
    mainApi.getSavedMovies()
      .then(res => {
        setSavedMovies(res);
      })
      .catch(err => {
        setIsPopupOpen(true);
        setText(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [setSavedMovies])

  useEffect(() => {
    if (!search.querry) return;
    const searchedMovies = allMovies.filter(movie => movieFilter(movie, search));
    setSearchedMovies(searchedMovies);
  }, [search, allMovies])

  useEffect(() => {
    setDisplayMovies(searchedMovies.slice(0, cardsAmount.totalCards));
  }, [cardsAmount, searchedMovies])

  useEffect(() => {
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, [debouncedResize]);

  useEffect(() => {
    setIsMoveButtonVisible(displayMovies.length < searchedMovies.length);
  }, [displayMovies, searchedMovies])

  return (
    <main className='movies main-container'>
      <Popup isOpen={isPopupOpen}>
        <PopupContent onClose={handlePopupClose} text={text} />
      </Popup>
      {isLoading ? null : (
        <SearchForm
          search={search}
          handleSubmit={handleSearchSubmit}
          setSearch={setSearch}
          isEmptyField={isEmptyField}
          handleShortsClick={handleShortsClick}
        />
      )}
      {isLoading
        ? <Preloader />
        : <MoviesCardList moviesData={displayMovies} />
      }
      {
        isMoveButtonVisible
          ? <button className='movies-list__button' type='button' onClick={handleMoreMovies}>
            Ещё
          </button>
          : null
      }
    </main>
  )
};

export default Movies;