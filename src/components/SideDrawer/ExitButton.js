import React from 'react';

import exit from '../../assets/images/exit.svg';
import './ExitButton.css';

const ExitButton = ({ closeButtonClick }) => {
    return <div className="exit-btn-cnt full-width">
        <img className="exit-btn pointer" src={exit} alt="Выйти из меню" onClick={closeButtonClick} />
    </div>
}

export default ExitButton;