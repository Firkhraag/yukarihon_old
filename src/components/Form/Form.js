import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { InputFieldsContext } from '../../store/InputFieldsStore';
import logoAbout from '../../assets/images/logo-about.svg';
import './Form.css';

const Form = ({ showForm, complete, setPolicyOpened }) => {

    const [inputValues, onNameChange, onEmailChange, onQuestionChange] = useContext(InputFieldsContext);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [honeyPass, setHoneyPass] = useState('');

    const onPasswordChange = (event) => {
        setHoneyPass(event.target.value);
    }

    const checkQuestion = (question) => {
        if ((question.length > 3) && (question.length < 5000)) {
            return true;
        } else {
            return false;
        }
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

    const readyToBeSubmitted = (checkName(inputValues.name) && checkEmail(inputValues.email) && checkQuestion(inputValues.question));

    let buttonStyle = 'enabled submit absolute form-inputs-width grad-bg pointer white container border-radius';
    if (!readyToBeSubmitted) {
        buttonStyle = 'disabled-btn submit absolute form-inputs-width container border-radius';
    }

    let formClasses = 'hide'
    if (showForm) {
        formClasses = 'form no-blur border-radius white-bg flex-column-centered-row show'
    }

    const getButtonStyle = () => {
        if (submitButtonClicked) {
            return ' checked';
        } else {
            return '';
        }
    }

    const submitButtonClickHandler = () => {
        // if (readyToBeSubmitted) {
        //     if (honeyPass === '') {
        //         setSubmitButtonClicked(!submitButtonClicked);
        //         setTimeout(() => {
        //             complete();
        //             setSubmitButtonClicked(false);
        //         }, 4500);
        //         fetch('https://yukarihonserver.website:3000/ask', {
        //             method: 'post',
        //             headers: {'Content-Type': 'application/json'},
        //             body: JSON.stringify({
        //                 name: inputValues.name,
        //                 email: inputValues.email,
        //                 question: inputValues.question,
        //             })
        //         });
        //     }
        // }
    }

    return (
        <div className={formClasses}>

            <img src={logoAbout} alt="Лого" className="form-logo" />

            <div className="input-fields">
                <div style={{marginTop: 10}} className="flex-column relative input-margin-bottom">
                    <input type="text" className="form-inputs-width" onChange={onNameChange} value={inputValues.name} required/>
                    <label>Как вас зовут?</label>
                </div>

                <div className="flex-column relative input-margin-bottom">
                    <input type="text" className="form-inputs-width" onChange={onEmailChange} value={inputValues.email} required/>
                    <label>Электронная почта</label>
                </div>

                <input type="text" name="password" style={{position:'absolute', opacity: 0}} tabIndex="-1" autoComplete="off"  onChange={onPasswordChange} />

                <div className="flex-column relative input-margin-bottom">
                    <textarea type="" className="form-inputs-width" onChange={onQuestionChange} value={inputValues.question} required/>
                    <label>Ваш вопрос</label>
                </div>
            </div>

            {/* <div>
            <div className="button-wrapper container white full-width">
                <div className="submit absolute form-inputs-width container border-radius disabled-btn" onClick={submitButtonClickHandler}>
                    Спросить
                </div>
                <div className="loader absolute loader-violet" />
                <div className="loader absolute loader-blue" />
                <div className="check-wrapper absolute">
                    <div className="checkmark" />
                </div>
            </div>
            <p className="form-inputs-width line-height text-centered" style={{marginBottom: '1em'}}>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <Link to="/privacy" onClick={() => setPolicyOpened(true)}>политикой конфиденциальности</Link></p>
            </div> */}
        </div>
    );
}

export default Form;