import React, { useContext } from 'react';
import { useTransition, animated } from 'react-spring';

import EventCard from './EventCard';
import { CardStatesContext } from '../../store/CardStatesStore';
import './Event.css';

const Event = ({ dayNum, transRef }) => {

    const [eventProperties, _, events] = useContext(CardStatesContext);

    // const getDayText = (day) => {
    //     if (day === 0) {
    //         return <h1 className="padded-container container text-centered" style={{marginBottom: '.75em'}}>Суббота<br />27 Октября 2019</h1>
    //     } else if (day === 1) {
    //         return <h1 className="padded-container container text-centered" style={{marginBottom: '.75em'}}>Воскресенье<br />2 Ноября 2019</h1>
    //     } else if (day === 2) {
    //         return <h1 className="padded-container container text-centered" style={{marginBottom: '.75em'}}>Суббота<br />3 Ноября 2019</h1>
    //     }
    // }

    const dayTransitions = useTransition(eventProperties.day === dayNum ? events[dayNum].lectures : [], item => item.id, {
        ref: transRef,
        unique: true,
        trail: 1,
        config: (item, state) => {
            switch (state) {
              case "enter": return { duration: 200 }
              case "leave": return { duration: 200 }
            }
        },
        from: { transform: 'scale(0)', position: 'absolute' },
        enter: { transform: 'scale(1)', position: 'static' },
        leave: { transform: 'scale(0)' }
    });

    return (
        <div className="relative">   
            { dayTransitions.map(({ item, key, props }) => <animated.div key={key} style={props}>
                {(key === '0') ? <h2 className="padded-container text-centered" style={{margin: '.25em'}}>{events[dayNum].desc}</h2> : <div className="hide" />}
                {/* { !arrowsNeeded ? <div className="hide" /> : <div>
                        { !isStart ? <img src={leftArrow} className="arrow-left pointer" onClick={handleLeftClick} alt="Левая стрелка" /> : <div className="hide" /> }
                        { isStart ? <img src={rightArrow} className="arrow-right pointer" onClick={handleRightClick} alt="Правая стрелка" /> : <div className="hide" /> }
                    </div> } */}
                <div key={item.id} className={"ev-cards ev-font-padding" + (item.data.length === 3 ? " ev-cards-3" : item.data.length === 1 ? " ev-cards-1" : " ev-cards-2")}>
                    { item.data.map((ev, groupNum) => <EventCard
                            key={groupNum} 
                            timeIndex={item.id}
                            eventName={ev.eventName}
                            lecturerName={ev.lecturerName}
                            time={ev.time}
                            groupNum={groupNum}
                            day={dayNum}
                            desc={ev.desc}
                            lecturerDesc={ev.lecturerDesc}
                            maxNumOfPeople={ev.maxNumOfPeople} />
                    ) }
                </div>
                </animated.div>) }
        </div>
    );
}

export default Event;