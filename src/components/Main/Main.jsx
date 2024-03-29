import React from 'react';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

import './Main.css';

function Main() {
  return (
    <main className='main main-container'>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;