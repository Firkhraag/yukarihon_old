import React, { useState, createRef, useEffect } from 'react';

import PartnerCard from './PartnerCard';
import leftArrow from '../../assets/images/arrow-backward.svg';
import rightArrow from '../../assets/images/arrow-forward.svg';
import './Partners.css';

const Partners = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const updateWindowDimensions = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindowDimensions);
        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        }
    });

    let arrowsNotNeeded = (width < 1080) || (width > 1500);
    let arrowsNotNeeded3 = (width < 1080) || (width > 1230);

    const [isStart1, setIsStart1] = useState(true);
    const [isStart2, setIsStart2] = useState(true);
    const [isStart3, setIsStart3] = useState(true);

    const scrollRef1 = createRef();
    const scrollRef2 = createRef();
    const scrollRef3 = createRef();

    const handleRightClick1 = () => {
        scrollRef1.current.scrollBy({ left: 2000, top: 0, behavior: 'smooth' })
        setIsStart1(false);
    };

    const handleLeftClick1 = () => {
        scrollRef1.current.scrollBy({ left: -2000, top: 0, behavior: 'smooth' })
        setIsStart1(true);
    };

    const handleRightClick2 = () => {
        scrollRef2.current.scrollBy({ left: 2000, top: 0, behavior: 'smooth' })
        setIsStart2(false);
    };

    const handleLeftClick2 = () => {
        scrollRef2.current.scrollBy({ left: -2000, top: 0, behavior: 'smooth' })
        setIsStart2(true);
    };

    const handleRightClick3 = () => {
        scrollRef3.current.scrollBy({ left: 2000, top: 0, behavior: 'smooth' })
        setIsStart3(false);
    };

    const handleLeftClick3 = () => {
        scrollRef3.current.scrollBy({ left: -2000, top: 0, behavior: 'smooth' })
        setIsStart3(true);
    };
    
    return <div>
    <div className="partners relative">
        <h2>Наши партнеры:</h2>
        { arrowsNotNeeded3 ? <div className="hide" /> : <div>
            { !isStart1 ? <img src={leftArrow} className="arrow-left pointer" onClick={handleLeftClick1} alt="Левая стрелка" /> : <div className="hide" /> }
            { isStart1 ? <img src={rightArrow} className="arrow-right pointer" onClick={handleRightClick1} alt="Правая стрелка" /> : <div className="hide" /> }
        </div> }
        <ul className="hs hs3" ref={scrollRef1}>
            <li><PartnerCard num={0} /></li>
            <li><PartnerCard num={1} /></li>
            <li><PartnerCard num={2} /></li>
            <li><PartnerCard num={3} /></li>
        </ul>
    </div>
    <div className="partners-2 relative">
        <h2>А также:</h2>
        { arrowsNotNeeded ? <div className="hide" /> : <div>
            { !isStart2 ? <img src={leftArrow} className="arrow-left pointer" onClick={handleLeftClick2} alt="Левая стрелка" /> : <div className="hide" /> }
            { isStart2 ? <img src={rightArrow} className="arrow-right pointer" onClick={handleRightClick2} alt="Правая стрелка" /> : <div className="hide" /> }
        </div> }
        <ul className="hs hs1" ref={scrollRef2}>
            <li><PartnerCard num={4} /></li>
            <li><PartnerCard num={5} /></li>
            <li><PartnerCard num={6} /></li>
            <li><PartnerCard num={7} /></li>
            <li><PartnerCard num={8} /></li>
        </ul>
    </div>
    <div className="partners-2 relative">
        { arrowsNotNeeded ? <div className="hide" /> : <div>
            { !isStart3 ? <img src={leftArrow} className="arrow-left pointer" onClick={handleLeftClick3} alt="Левая стрелка" /> : <div className="hide" /> }
            { isStart3 ? <img src={rightArrow} className="arrow-right pointer" onClick={handleRightClick3} alt="Правая стрелка" /> : <div className="hide" /> }
        </div> }
        <ul className="hs hs1" ref={scrollRef3}>
            <li><PartnerCard num={9} /></li>
            <li><PartnerCard num={10} /></li>
            <li><PartnerCard num={11} /></li>
            <li><PartnerCard num={12} /></li>
            <li><PartnerCard num={13} /></li>
        </ul>
    </div>
    </div>;
}

export default Partners;