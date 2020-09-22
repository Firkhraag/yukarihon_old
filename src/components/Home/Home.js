import React, { useState } from 'react';
import Img from 'react-image';
import { Link } from 'react-scroll';

import logoHome from '../../assets/images/hito-roof.svg';
import Spinner from '../Spinner/Spinner';
import './Home.css';

const Home = () => {

    const [buttonHovered, setButtonHovered] = useState(false);
    
    let spanStyles = 'hide';
    if (buttonHovered) {
        spanStyles = 'show';
    }

    return (
        <div className="container padded-container home-cnt text-centered">
            <Img src={logoHome} className="logo-home" loader={<Spinner where='home' />} />
            <h1 className="head">Юкарихон</h1>
            <h1 className="head2">стрелы и строфы</h1>
            <p className="subhead">городская школа японистики в Москве</p>
            <p className="subhead">27 октября – 3 ноября</p>
            <Link className="text-centered pointer bold"
                to="events" smooth={true} offset={0} duration={500}
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}>
                    <span className={spanStyles}></span>
                    <span className={spanStyles}></span>
                    <span className={spanStyles}></span>
                    <span className={spanStyles}></span>
                    Подробнее
            </Link>
            <div className="mousey">
                <div />
            </div>
        </div>
    );
}

export default Home;