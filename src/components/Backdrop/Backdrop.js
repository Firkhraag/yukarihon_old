import React from 'react';

import Form from '../Form/Form';
import Finish from '../Finish/Finish';
import exit from '../../assets/images/exit-white.svg';
import './Backdrop.css';

const Backdrop = ({ show, click, showForm, showFinish, finishMsg, setPolicyOpened }) => {
    let backdropClasses = 'hide'
    if (show) {
        backdropClasses = 'backdrop sticky show';
    }

    const onClick = (event) => {
        if (event.target === event.currentTarget) {
            click();
        }
    }

    return (
        <div className={backdropClasses} onMouseDown={onClick}>
            <Form showForm={ showForm } complete={click} setPolicyOpened={setPolicyOpened} />
            <img className="close-backdrop pointer" src={exit} alt="Выйти" onClick={click} />
            <Finish showFinish={showFinish} finishMsg={finishMsg} />
        </div>
    );
}

export default Backdrop;