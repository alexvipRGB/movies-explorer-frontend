import React from 'react';

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__container">
                <p className="footer__author">&copy; 2023 Алексей Алексеевич</p>
                <a className='footer__link' href='https://practicum.yandex.ru' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
                <a className="footer__link" href='https://github.com/alexvipRGB' target='_blank' rel='noreferrer'>Github</a>
            </div>
        </footer>
    );
}

export default Footer;