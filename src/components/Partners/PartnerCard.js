import React from 'react';
import { useSpring, animated } from 'react-spring';

import hse from '../../assets/images/hse-blue.svg';
import hseBlack from '../../assets/images/hse-black.svg';
import nauchka from '../../assets/images/nauchka.jpg';
import seiran from '../../assets/images/seiran.svg';
import notes from '../../assets/images/notes.jpg';
import emperor from '../../assets/images/emperor.jpg';
import isaa from '../../assets/images/isaa.jpeg';
import vostok from '../../assets/images/vostok.png';
import vyshka from '../../assets/images/vyshka.jpg';
import samurai from '../../assets/images/samurai.jpg';
import fusigi from '../../assets/images/fusigi.jpg';
import musubi from '../../assets/images/musubi.jpg';
import tori from '../../assets/images/tori.jpg';
import kimonozuki from '../../assets/images/kimonozuki.jpg';
import './PartnerCard.css';

const partners = [
    {
        img: hseBlack,
        site: 'https://iocs.hse.ru/',
        name: 'Институт классического Востока и Античности НИУ ВШЭ',
        style: 'partner-logo-1',
        desc: 'Осуществляет исследовательскую и образовательную деятельность в области изучения исторического прошлого и настоящего самых различных стран и регионов – от Эфиопии до Японии, от Монголии до Индокитая!'
    },
    {
        img: hse,
        site: 'https://oriental.hse.ru/',
        name: 'Школа востоковедения НИУ ВШЭ',
        style: 'partner-logo-1',
        desc: 'Один из ведущих российский центров в области подготовки успешных японистов. В программе предусмотрены стажировки, плотное изучение японского языка и Японии в современном мире.'
    },
    {
        img: notes,
        site: 'https://vk.com/zapiskinadosuge',
        name: 'Клуб «Записки на досуге (Япония)»',
        style: 'partner-logo-4',
        desc: 'Наиболее крупный клуб по интересам, знакомящий читателей и слушателей с историей и культурой традиционной Японии, Японии премодерна. Язык изложения простой, а контент отличается доступностью изложения.'
    },
    {
        img: emperor,
        site: 'https://vk.com/tenno_monogatari',
        name: 'Проект «Повесть об Императоре»',
        style: 'partner-logo-5',
        desc: 'Уникальный проект, посвящённый Императорам Японии и истории страны в XIV в. – эпоху войны Южного и Северного Дворов. Статьи выпускаются ежедневно, а в учебном году организуются образовательные курсы.'
    },

    {
        img: nauchka,
        site: 'https://cbsuvao.ru/',
        name: 'Библиотека №122 им. А. Грина',
        style: 'partner-logo-3',
        desc: ''
    },
    {
        img: isaa,
        site: 'http://www.iaas.msu.ru/index.php/ru/',
        name: 'Институт стран Азии и Африки МГУ',
        style: 'partner-logo-3',
        desc: ''
    },
    {
        img: vostok,
        site: 'https://www.ivran.ru/',
        name: 'Институт востоковедения РАН',
        style: 'partner-logo-3',
        desc: ''
    },
    {
        img: vyshka,
        site: 'https://school.hse.ru/',
        name: 'Лицей НИУ ВШЭ',
        style: 'partner-logo-3',
        desc: ''
    },
    {
        img: seiran,
        site: 'https://seiran.school/',
        name: 'SEIRAN',
        style: 'partner-logo-3',
        desc: ''
    },
    {
        img: samurai,
        site: 'https://vk.com/club40187114',
        name: 'КИР «Самураи Симадзу»',
        style: 'partner-logo-3',
        desc: ''
    },

    {
        img: kimonozuki,
        site: 'https://vk.com/kimonozuki',
        name: 'Проект «Kimonozuki»',
        style: 'partner-logo-3',
        desc: ''
    },
    {
        img: tori,
        site: 'https://vk.com/toriband',
        name: 'Музыкальный коллектив «Тори»',
        style: 'partner-logo-3',
        desc: ''
    },
    {
        img: musubi,
        site: 'https://vk.com/hse_japan',
        name: 'Японский клуб «Musubi» НИУ ВШЭ',
        style: 'partner-logo-3',
        desc: ''
    },
    {
        img: fusigi,
        site: 'https://vk.com/fusigi_club',
        name: 'Клуб японской культуры «Фусиги»',
        style: 'partner-logo-3',
        desc: ''
    },
];

const PartnerCard = ({ num }) => {

    const [props, set] = useSpring(() => ({ s: 1, config: { mass: 5, tension: 350, friction: 40 } }));
    return <animated.div
        onMouseEnter={ () => set({ s: 1.07 }) }
        onMouseLeave={ () => set({ s: 1 }) }
        style={{ transform: props.s.interpolate((s) => `scale(${s})`) }}
        className={(partners[num].desc) ? "partner-card border-radius text-centered line-height" : "partner-card-2 border-radius text-centered line-height" }
    >
        <a href={partners[num].site}>
            <div className="partner-logo-cnt container pointer">
                <img src={partners[num].img} alt={partners[num].name} className={partners[num].style} />
            </div>
        </a>
        <hr />
        <div className="partner-info">
            <h2><a href={partners[num].site} className="black">{partners[num].name}</a></h2>
            <p>{partners[num].desc}</p>
        </div>
    </animated.div>;
}

export default PartnerCard;