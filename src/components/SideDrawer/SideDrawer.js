import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import ExitButton from './ExitButton';
import './SideDrawer.css';

const SideDrawer = ({ closeButtonClick, show }) => {
    let drawerClasses = 'side-drawer white-bg sticky'
    if (show) {
        drawerClasses = 'side-drawer white-bg sticky open'
    }
    return (
        <div className={drawerClasses}>
            <ExitButton closeButtonClick={closeButtonClick} />
            <ul className="flex-column">
                <a onClick={() => {
                    scroll.scrollToTop({duration: 500});
                    closeButtonClick();
                }}>
                    <li className="pointer">Главная</li>
                </a>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onClick={closeButtonClick}>
                    <li className="pointer">О школе</li>
                </Link>
                <Link activeClass="active" to="events" spy={true} smooth={true} offset={-80} duration={500} onClick={closeButtonClick}>
                    <li className="pointer">Регистрация</li>
                </Link>
                <Link activeClass="active" to="faq" spy={true} smooth={true} offset={-80} duration={500} onClick={closeButtonClick}>
                    <li className="pointer">F.A.Q.</li>
                </Link>
                <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-80} duration={500} onClick={closeButtonClick}>
                    <li className="pointer">Контакты</li>
                </Link>
            </ul>
        </div>
    );
};

export default SideDrawer;