import React, { useState } from 'react';

import ExitButton from '../SideDrawer/ExitButton';
import './DonateDrawer.css';

const DonateDrawer = ({ close, show }) => {

    const [selectedSumType, setSelectedSumType] = useState(4);

    let drawerClasses = 'donate-drawer el-vert-scroll white-bg sticky'
    if (show) {
        drawerClasses = 'donate-drawer el-vert-scroll white-bg sticky open'
    }

    let firstButtonStyle = '';
    let secondButtonStyle = '';
    let thirdButtonStyle = '';
    let fourthButtonStyle = '';
    if (selectedSumType === 1) {
        firstButtonStyle = ' donate-selected';
    } else if (selectedSumType === 2) {
        secondButtonStyle = ' donate-selected';
    } else if (selectedSumType === 3) {
        thirdButtonStyle = ' donate-selected';
    } else if (selectedSumType === 4) {
        fourthButtonStyle = ' donate-selected';
    }

    const getDonateSum = () => {
        if (selectedSumType === 1) {
            return "100";
        } else if (selectedSumType === 2) {
            return "300";
        }  else if (selectedSumType === 3) {
            return "500";
        } else {
            return "";
        }
    }

    return (
        <div className={drawerClasses}>
            <ExitButton closeButtonClick={ close } />
            {/* <div className="exit-btn-cnt full-width"><img className="exit-btn pointer" src={exit} alt="Выйти из меню" onClick={closeButtonClick} /></div> */}
            <div className="desktop-font don-cnt">
                <h2 className="text-centered">Помочь проекту</h2>
                <p className="donate-desc-margin">Ваша помощь идет на развитие проекта</p>
                <hr />
                <p className="text-centered bold choose-sum">Выберите размер суммы:</p>
                <div className="donate-btns">
                    <div className="flex-column-centered-row">
                        <p>Гокэнин</p>
                        <button className={ "pointer" + firstButtonStyle } onClick={() => setSelectedSumType(1)}>100 рублей</button>
                    </div>
                    <div className="flex-column-centered-row">
                        <p>Кугэ</p>
                        <button className={ "pointer" + secondButtonStyle } onClick={() => setSelectedSumType(2)}>300 рублей</button>
                    </div>
                    <div className="flex-column-centered-row">
                        <p>Миутибито</p>
                        <button className={ "pointer" + thirdButtonStyle } onClick={() => setSelectedSumType(3)}>500 рублей</button>
                    </div>
                    <div className="flex-column-centered-row">
                        <p>?</p>
                        <button className={ "pointer" + fourthButtonStyle } onClick={() => {
                            setSelectedSumType(4);
                        }}>Другая сумма</button>
                    </div>
                </div>
                <div className="donate-desc-margin">
                    <iframe src={"https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0&targets-hint=&default-sum=" + getDonateSum() + "&button-text=14&payment-type-choice=on&hint=&successURL=https%3A%2F%2Fyukarihon.ru&quickpay=shop&account=4100110441124741"} title="Донат" width="100%" height="223" frameBorder="0" allowtransparency="true" scrolling="no" />
                    <p style={{fontSize: '.75em'}}>Или отправить Тюленеву Ивану Алексеевичу на СберКарту №4276 3801 2609 5467</p>
                </div>
            </div>
        </div>
    );
};

export default DonateDrawer;