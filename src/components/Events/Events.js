import React, { useContext, useRef, useState } from 'react';
import { useSpring, useChain, animated } from 'react-spring';
import Img from 'react-image';
import { Link } from 'react-router-dom';

import Spinner from '../Spinner/Spinner';
import { CardStatesContext } from '../../store/CardStatesStore';
import { InputFieldsContext } from '../../store/InputFieldsStore';
import calendar from '../../assets/images/calendar.svg';
import Event from './Event';
import './Events.css';

const Events = ({ openFinish }) => {

    const [eventProperties, setDay] = useContext(CardStatesContext);
    const [inputValues, onNameChange, onEmailChange] = useContext(InputFieldsContext);
    const [honeyPass, setHoneyPass] = useState('');
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

    const onPasswordChange = (event) => {
        setHoneyPass(event.target.value);
    }

    const checkName = (name) => {
        if (name) {
            if (name.length < 100) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    const checkEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            if (email.length < 256) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    const checkEventSignValid = () => {
        const filteredArr = eventProperties.checkedCards.map(day => day.filter(ev =>((ev === 0) || (ev === 1) || (ev === 2)) ));
        if ((filteredArr[0].length !== 0) || (filteredArr[1].length !== 0) || (filteredArr[2].length !== 0)) {
            return true;
        } else {
            return false;
        }
    }

    const isReadyToBeSubmitted = (checkName(inputValues.name) && checkEmail(inputValues.email) && checkEventSignValid());
    // const isReadyToBeSubmitted = true;

    const transRef1 = useRef()
    const transRef2 = useRef()
    const transRef3 = useRef()
    
    useChain(eventProperties.day === 0 ? [transRef2, transRef3, transRef1] : eventProperties.day === 1 ? [transRef1, transRef3, transRef2] : [transRef2, transRef1, transRef3], [0, 0, .2]);

    let firstDayStyle = 'events-header pointer container';
    if (eventProperties.day === 0) {
        firstDayStyle += ' violet-bg white';
    }
    let secondDayStyle = 'events-header pointer container';
    if (eventProperties.day === 1) {
        secondDayStyle += ' grad-bg white';
    }
    let thirdDayStyle = 'events-header pointer container';
    if (eventProperties.day === 2) {
        thirdDayStyle += ' blue-bg white';
    }

    let buttonStyle = 'register-btn register-btn-width pointer border-radius flex-centered-vert';
    if (!isReadyToBeSubmitted) {
        buttonStyle = 'disabled-btn register-btn register-btn-width border-radius flex-centered-vert';
    }

    const props = useSpring({
        config: { duration: ((eventProperties.day === -1) && (!checkEventSignValid())) ? 300 : 1 },
        from: { opacity: 0, transform: 'scale(0)', position: 'absolute' },
        to: { opacity: ((eventProperties.day === -1) && (!checkEventSignValid())) ? 1 : 0, transform: ((eventProperties.day === -1) && (!checkEventSignValid())) ? 'scale(1)' : 'scale(0)', position: ((eventProperties.day === -1) && (!checkEventSignValid())) ? 'static' : 'absolute' },
    });

    const submitButtonClickHandler = () => {
        // if (isReadyToBeSubmitted) {
        //     if (honeyPass === '') {
        //         fetch('https://yukarihonserver.website:3000/signup', {
        //             method: 'post',
        //             headers: {'Content-Type': 'application/json'},
        //             body: JSON.stringify({
        //                 name: inputValues.name,
        //                 email: inputValues.email,
        //                 events: eventProperties.checkedCards
        //                 // firstDay: eventProperties.checkedCards[0],
        //                 // secondDay: eventProperties.checkedCards[1],
        //                 // thirdDay: eventProperties.checkedCards[2]
        //             })
        //         }).then(data => data.json())
        //         .then(data => {
        //             // console.log(data.msg)
        //             // if (data.msg === "Увидимся на мероприятии!") {
        //             if (data.msg === 'Подтверждение регистрации отправлено на указанный вами почтовый ящик (не забудьте проверить спам)') {
        //                 // console.log('gghjghh')
        //                 setSubmitButtonClicked(true);
        //             }
        //             setTimeout(() => {
        //                 openFinish(data.msg);
        //             }, 850);
        //         })
        //         .catch(err => {
        //             openFinish("Ошибка доступа к базе данных");
        //         });
        //     }
        // }
    }

    const getButtonStyle = () => {
        if (submitButtonClicked) {
            return ' checked';
        } else {
            return '';
        }
    }

    return (
    <div className="relative overflow-hidden full-width margin-from-prev-comp">
        <h1 className="register-header text-centered">Информация</h1>
        <h2 className="register-sub-header text-centered">о прошедшем мероприятии</h2>
        {/* <div className="container" style={{marginBottom: '.75em'}}>
                <div className="flex-column input-div">
                    <label>Введите ваше имя или никнейм</label>
                    <input type="text" placeholder="Как вас зовут?" className="sign-input border-radius" onChange={onNameChange} value={inputValues.name} required/>
                </div>
                <div className="flex-column input-div">
                    <label>Введите электронную почту</label>
                    <input type="text" placeholder="Ваш email" className="sign-input border-radius" onChange={onEmailChange} value={inputValues.email} required/>
                </div>
                <input type="text" name="password" style={{position:'absolute', opacity: 0}} tabIndex="-1" autoComplete="off"  onChange={onPasswordChange} />
        </div> */}
        <animated.div style={props}>
            <h2 className="text-centered padded-container" style={{marginBottom: '.75em'}}>Выберите мероприятия</h2>
        </animated.div>
        <div className="flex ev-cards-headers">
            <div className={firstDayStyle} onClick={() => setDay(0)} >
                <h2 className="text-centered">27 Октября</h2>
            </div>
            <div className={secondDayStyle} onClick={() => setDay(1)} >
                <h2 className="text-centered">2 Ноября</h2>
            </div>
            <div className={thirdDayStyle} onClick={() => setDay(2)} >
                <h2 className="text-centered">3 Ноября</h2>
            </div>
        </div>

        <Event dayNum={0} transRef={transRef1} />
        <Event dayNum={1} transRef={transRef2} />
        <Event dayNum={2} transRef={transRef3} />

        {/* <animated.div className="container" style={{ ...props, marginTop: '3.5em' }}> */}
        {/* <div className={"container" + getButtonStyle()} style={{ marginTop: '2em' }}>
            <button className={buttonStyle} onClick={submitButtonClickHandler}>{isReadyToBeSubmitted ? <Img src={calendar} className="calendar-logo" loader={<Spinner where='ev' />} /> : <div className="hide" />}{ submitButtonClicked ? '' : 'Завершить регистрацию' }</button>
            <p className="register-btn-width line-height text-centered">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <Link to="/privacy">политикой конфиденциальности</Link></p>
        </div> */}
    </div>
    );
}

export default Events;