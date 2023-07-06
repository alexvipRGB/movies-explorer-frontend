import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import Login from '../Login/Login';
import Register from '../Register/Register';

import Profile from '../Profile/Profile';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import NotFoundPage from '../NotFoundPage/NotFoundPage';

import moviesBase from '../../utils/moviesBase';

function App() {
  const [moviesList, setMoviesList] = React.useState([]);
  const [addedMoviesList, setAddedMoviesList] = React.useState([]);

  React.useEffect(() => {
    setMoviesList(moviesBase);
  }, []);

  React.useEffect(() => {
    setAddedMoviesList(moviesBase.filter((movie) => {
      return movie.saved
    }))
  }, []);

  return (
    <div className='page'>
      <div className='page__container'>
        <Routes>
          <Route exact path='/' element={
            <>
              <Header loggedIn={false} />
              <Main />
              <Footer />
            </>
          } />
          <Route path='/signin' element={
            <>
              <Login />
            </>
          } />
          <Route path='/signup' element={
            <>
              <Register />
            </>
          } />
          <Route exact path='/movies' element={
            <>
              <Header loggedIn={true} />
              <Movies moviesList={moviesList} />
              <Footer />
            </>
          } />
          <Route exact path='/saved-movies' element={
            <>
              <Header loggedIn={true} />
              <SavedMovies moviesList={addedMoviesList} />
              <Footer />
            </>
          } />
          <Route exact path='/profile' element={
            <>
              <Header loggedIn={true} />
              <Profile />
            </>
          } />
          <Route path='*' element={
            <>
              <NotFoundPage />
            </>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;