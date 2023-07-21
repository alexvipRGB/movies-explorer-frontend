import { createPortal } from 'react-dom'; // используем для рендеринга модального окна вне DOM-иерархии родительского компонента.

import './Popup.css';

function Popup({ isOpen, children }) {
  return (
    isOpen ? createPortal(<div className='popup'> {children} </div>, document.body) : null
  )
};

export default Popup;