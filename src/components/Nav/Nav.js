import React, { useContext } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import logoNav from '../../assets/images/logo-nav.svg';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Donate from './Donate';
import { WindowPropertiesContext } from '../../store/WindowPropertiesStore';
import './Nav.css';

const Nav = ({ drawerToggleClickHandler, setDonateDrawerOpen }) => {

    const [windowProperties, _] = useContext(WindowPropertiesContext);

    let headerStyle = 'sticky white-bg full-width flex-centered-vert';
    if (!windowProperties.navVisible) {
        headerStyle = 'header-hidden white-bg full-width flex-centered-vert';
    }

    let isDesktop = windowProperties.width >= 1080;

    return (
        <header className={headerStyle}>
            <a onClick={() => scroll.scrollToTop({duration: 500})}>
                <img src={logoNav} alt="Лого" className="nav-logo pointer" />
            </a>
            <nav>
                <div className="toggle-btn">
                    <Donate setDonateDrawerOpen={setDonateDrawerOpen} isDesktop={isDesktop} />
                    <div onClick={drawerToggleClickHandler}>
                        <DrawerToggleButton />
                    </div>
                </div>
                <ul>
                    {/* <a onClick={() => scroll.scrollToTop({duration: 500})}>
                        <li className="pointer">Главная</li>
                    </a> */}
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                        <li className="pointer">О школе</li>
                    </Link>
                    <Link activeClass="active" to="events" spy={true} smooth={true} offset={-80} duration={500}>
                        <li className="pointer text-centered">Регистрация</li>
                    </Link>
                    <Link activeClass="active" to="faq" spy={true} smooth={true} offset={-80} duration={500}>
                        <li className="pointer">F.A.Q.</li>
                    </Link>
                    <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-80} duration={500} style={{marginRight: '.5em'}}>
                        <li className="pointer">Контакты</li>
                    </Link>
                    <Donate setDonateDrawerOpen={setDonateDrawerOpen} isDesktop={isDesktop} />
                </ul>
            </nav>
        </header>
    );
}

export default Nav;