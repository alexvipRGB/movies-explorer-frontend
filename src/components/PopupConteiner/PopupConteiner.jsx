import { useRef } from 'react';

import './PopupConteiner.css';

import { useClickOverlay } from '../../hooks/useClickOverlay';

import fail from '../../images/logo/fail.svg';

function PopupContent({ text, onClose }) {
  const popupRef = useRef(null);
  useClickOverlay(popupRef, onClose);

  return (
    <div className='popup__container' ref={popupRef}>
      <div className='popup__content'>
        <button className='popup__close' type='button' aria-label='Закрыть окно' onClick={onClose} />
        <img className='popup__icon' src={fail} alt='Окно Ошибки' />
        <h2 className={'popup__title'}>{text}</h2>
      </div>
    </div>
  )
}

export default PopupContent;