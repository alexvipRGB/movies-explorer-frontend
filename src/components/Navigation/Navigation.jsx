import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  const [showItems, setShowItems] = useState(false);

  function handleToggleMenu() {
    setShowItems(!showItems);
  };

  return (
    <nav className='navigation'>
      <button className='navigation__button-menu' type='button' onClick={handleToggleMenu}></button>
      <div className={`navigation__container ${showItems ? 'navigation__container_visible' : ''}`} onClick={handleToggleMenu}>
        <div className='navigation__sidebar'>
          <div className='navigation__list-container'>
            <button className='navigation__button-close' type='button' onClick={handleToggleMenu}></button>
            <ul className='navigation__list'>
              <li className='navigation__list-item navigation__list-item_type_main'>
                <Link to='/' className='navigation__link' onClick={handleToggleMenu}>Главная</Link>
              </li>
              <li className='navigation__list-item'>
                <Link to='/movies' className='navigation__link' onClick={handleToggleMenu}>Фильмы</Link>
              </li>
              <li className='navigation__list-item'>
                <Link to='/saved-movies' className='navigation__link' onClick={handleToggleMenu}>Сохранённые фильмы</Link>
              </li>
            </ul>
          </div>
          <Link to='/profile' className='navigation__link navigation__link_type_profile' onClick={handleToggleMenu}></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;