import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import Img from 'react-image';

import bookImage from '../../assets/images/book.svg';
import Spinner from '../Spinner/Spinner';
import './Finish.css';

const Finish = ({ showFinish, finishMsg }) => {

    const props = useSpring({
        config: config.stiff,
        from: { transform: 'scale(1.5)' },
        to: { transform: showFinish ? 'scale(1.0)' : 'scale(1.5)' }
    });

    let classes = 'hide'
    if (showFinish) {
        classes = 'container white-bg border-radius finish-popup'
    }

    return <animated.div className={classes} style={props}>
        <Img src={bookImage} className="finish-logo p-bottom-margin" loader={<Spinner where='finish' />} />
        <h1 className="text-centered">{finishMsg}</h1>
    </animated.div>;
}

export default Finish;