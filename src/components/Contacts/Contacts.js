import React from 'react';

import Map from './Map';
import vkLogo from '../../assets/images/vk-logo.svg';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="padded-container contacts-container margin-from-prev-comp">
            <Map />
            <div className="info line-height">
                <p className="contact-information-margin"><span className="bold">Наша почта:</span><br />yukarihonschool@gmail.com</p>
                <p><span className="bold">Автор идеи, координатор проекта:</span><br />Иван Тюленев</p>
                <p>tyulenev1313@gmail.com</p>
                <p className="contact-information-margin">8 (915) 480-40-13</p>
                <p className="contact-information-margin"><span className="bold">Адрес:</span><br />г. Москва, ул. Волочаевская, д. 14а<br />(Библиотека №122 им. А. Грина)</p>
                <p><span className="bold">Cтраница в ВКонтакте:</span><br /><a href="https://vk.com/yukarihon" className="black">vk.com/yukarihon</a></p>
                <a href="https://vk.com/yukarihon"><img src={vkLogo} alt="VK ссылка" className="vk-logo pointer" /></a>
            </div>
        </div>
    );
}

export default Contacts;