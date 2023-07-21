import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

import { mainApi } from '../../utils/MainApi';
import { CurrentUserContextProvider } from '../../contexts/CurrentUserContext';
import { CurrentMoviesContextProvider } from '../../contexts/CurrentMoviesContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import Popup from '../Popup/Popup';
import PopupContent from '../PopupConteiner/PopupConteiner';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [isTokenCheck, setIsTokenCheck] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [text, setText] = useState('');

  function handlePopupClose() {
    setIsPopupOpen(false);
    setText('');
  }

  useEffect(() => {
    const userId = localStorage.getItem('currentId');

    if (userId) {
      mainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
          setIsLogin(true);
        })
        .catch((err) => {
          setIsPopupOpen(true);
          setText(err);
        })
        .finally(() => {
          setIsTokenCheck(true);
        })
    }
    else {
      setIsTokenCheck(true);
      setIsLogin(false);
    }
  }, []);

  return (
    <div className='page'>
      <div className='page__container'>
        {isTokenCheck
          ? <CurrentUserContextProvider context={{ currentUser, setCurrentUser }}>
            <CurrentMoviesContextProvider context={{ savedMovies, setSavedMovies }}>
              <Routes>
                <Route exact path='/' element={
                  <>
                    <Header isLogin={isLogin} />
                    <Main />
                    <Footer />
                  </>
                } />
                <Route path='/signup' element={
                  <ProtectedRoute isLogin={!isLogin}>
                    <Register changeStatus={setIsLogin} />
                  </ProtectedRoute>
                } />
                <Route path='/signin' element={
                  <ProtectedRoute isLogin={!isLogin}>
                    <Login changeStatus={setIsLogin} />
                  </ProtectedRoute>
                } />
                <Route path='/movies' element={
                  <ProtectedRoute isLogin={isLogin}>
                    <>
                      <Header isLogin={isLogin} />
                      <Movies />
                      <Footer />
                    </>
                  </ProtectedRoute>
                } />
                <Route path='/saved-movies' element={
                  <ProtectedRoute isLogin={isLogin}>
                    <>
                      <Header isLogin={isLogin} />
                      <SavedMovies />
                      <Footer />
                    </>
                  </ProtectedRoute>
                } />
                <Route path='/profile' element={
                  <ProtectedRoute isLogin={isLogin}>
                    <>
                      <Header isLogin={isLogin} />
                      <Profile changeStatus={setIsLogin} />
                    </>
                  </ProtectedRoute>
                } />
                <Route path='*' element={<Navigate to='/404' replace />} />
                <Route path='/404' element={
                  <>
                    <NotFoundPage />
                  </>
                } />
              </Routes>
              <Popup isOpen={isPopupOpen}>
                <PopupContent onClose={handlePopupClose} text={text} />
              </Popup>
            </CurrentMoviesContextProvider>
          </CurrentUserContextProvider>
          : <div className='page__preloader'>
            <Preloader />
          </div>
        }
      </div>
    </div>
  );
}

export default App;