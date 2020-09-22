import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import ResizeObserver from 'resize-observer-polyfill';

import './Faq.css';

const questionsAnswers = [
    {
        id: 0,
        question: 'Когда и куда?',
        answer: <div>
            <ul className="desktop-font line-height">
                <li>Воскресение 27 октября 14:00-20:00 — первый, неполный день. Включает в
                    себя открытие школы, знакомство с командой, дискуссии и интервью.</li>
                <li>Суббота 2 ноября 12:00-22:00 — полноценный день. Пройдут различные
                    лекции, беседы и мастер-классы, а также вака-баттл и вечерний просмотр
                    исторического фильма.</li>
                <li>Воскресение 3 ноября 12:00-20:00 — заключительный день. Включает в
                    себя лекции, беседы, музыкальный концерт и церемонию закрытия школы.</li>
            </ul><br />
            <p className="desktop-font line-height p-bottom-margin">Все 3 дня школы мы проведём в Библиотеке им. А. Грина по адресу ул. Волочаевская, д. 14а (<a href="https://vk.com/lib_uvao_122">https://vk.com/lib_uvao_122</a>). Два этажа книг, потаённых уголков и тайн, диванчиков и картин обеспечивают по-настоящему романтистскую атмосферу в нашем месте проведения.</p>
            <p className="desktop-font line-height p-bottom-margin">А ещё вы можете принять участие дистанционно! Для этого необходимо
                установить приложение Zoom и внимательно следить за страницей в
                ВКонтакте <a href="https://vk.com/yukarihon">vk.com/yukarihon</a> – во время мероприятия по московскому
                времени кликаете по ссылке, и перед вами открывается онлайн-трансляция с
                чатом.
            </p>
        </div>,
    },
    {
        id: 1,
        question: 'Кто проводит мероприятия?',
        answer: <div>
            <p className="desktop-font line-height p-bottom-margin">Команда проекта «Юкарихон: стрелы и строфы» – начинающие японисты, и
                просто группа единомышленников, по уши влюблённые в Японию и готовые
                рассказать о ней вам! Подробнейшим образом о Команде – в обсуждении <a href="https://vk.com/topic-184996744_39713476">vk.com/topic-184996744_39713476</a>.</p>
            <p className="desktop-font line-height p-bottom-margin">Если точнее, мы занимаемся организацией Школы. А проводить мероприятия
                будут российские японисты из самых различных сообществ:
            </p>
            <ul className="desktop-font line-height">
                <li>преподаватели Института классического Востока и Античности,
                    Школы Востоковедения НИУ ВШЭ, Института Стран Азии и Африки
                    МГУ, Института Востоковедения РАН и других учебных заведений;</li>
                <li>реконструкторы астраханского клуба «Самураи Симадзу», мастера
                    исторических ролевых игр, авторы образовательных проектов «Записки
                    на досуге (Япония)», «Kimonozuki» и «Повесть об Императоре»,
                    коллектив школы японского языка «Seiran», музыканты группы
                    «Тори»…<br />
                    Подробнее см. раздел «Регистрация»!</li>
            </ul>
        </div>,
    },
    {
        id: 2,
        question: 'Как принять участие?',
        answer: <div><p className="desktop-font line-height p-bottom-margin">Во-первых, без возрастных ограничений. Однако стоит помнить, что выбор
            тем мероприятий основан на запросах учеников старших классов и студентов
            младших курсов, в любой степени сложности интересующихся языком,
            культурой или историей Японии.</p>
            <p className="desktop-font line-height p-bottom-margin">Во-вторых, совершенно бесплатно. Но! Очень важно пройти
            предварительную регистрацию у нас на сайте :)</p>
            <p className="desktop-font line-height">В-третьих, даже если вы не собираетесь плотно изучать Японию и уж, [чего
            доброго], становиться японистом – приходите! Практический и
            дискуссионный материал ориентирован на всех гостей школы. Не ждите
            вузовского лекционного курса – вы сможете поддержать диалог с ведущими
            и лекторами независимо от знаний!
        </p></div>,
    },
    {
        id: 3,
        question: 'Что взять с собой?',
        answer: <div><p className="desktop-font line-height p-bottom-margin">Мы ничего не продаём, поэтому деньги берите по собственному усмотрению.
            Что касается личных вещей, их можно будет оставить на вешалках в
            прихожей.</p>
            <p className="desktop-font line-height">Также между мероприятиями организуются перерывы и кофе-брейки. Вы
            сможете выпить чай или кофе и даже плотно перекусить – мы угощаем!
            Бумагу и письменные принадлежности вы сможете получить на самом
            мероприятии, но если хотите – можно взять собственные.
        </p></div>,
    },
    {
        id: 4,
        question: 'Как поддержать проект?',
        answer: <div><p className="desktop-font line-height p-bottom-margin">С одной стороны, будем рады добровольным взносам на развитие проекта!
        (ищите в верхней графе сайта кнопку с рукой и печеньками в форме сердечек) С другой,
        приветствуем ваши отзывы – их лучше всего оставить в этом обсуждении <a href="https://vk.com/topic-184996744_39756471">vk.com/topic-184996744_39756471</a>.</p>
        <p className="desktop-font line-height">Замечательный ход – рассказать о проекте знакомым. Помимо прочего,
        пиратская съёмка у нас не возбраняется, так что можно воспользоваться
        ситуацией и наполнить свой Инстаграм фотографиями с мероприятий :)
    </p></div>,
    },
];

const Faq = ({ buttonClick }) => {

    const refs = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const [questionOpened, setQuestionOpened] = useState(-1);
    const [buttonHovered, setButtonHovered] = useState(false);
    const [height0, setHeight0] = useState(0);
    const [height1, setHeight1] = useState(0);
    const [height2, setHeight2] = useState(0);
    const [height3, setHeight3] = useState(0);
    const [height4, setHeight4] = useState(0);

    useEffect(() => {
        const ro = [
            new ResizeObserver(([entry]) => {
                setHeight0(entry.target.scrollHeight);
            }),
            new ResizeObserver(([entry]) => {
                setHeight1(entry.target.scrollHeight);
            }),
            new ResizeObserver(([entry]) => {
                setHeight2(entry.target.scrollHeight);
            }),
            new ResizeObserver(([entry]) => {
                setHeight3(entry.target.scrollHeight);
            }),
            new ResizeObserver(([entry]) => {
                setHeight4(entry.target.scrollHeight);
            }),
        ];

        refs.forEach((ref, i) => {
            if (ref.current) {
                ro[i].observe(ref.current)
            }
        })
    
        return () => {
            ro.forEach(r => r.disconnect());
        }
    }, [refs]);

    const propsArray = [
        useSpring({
            from: { opacity: 0, height: 0 },
            to: { opacity: (questionOpened === 0) ? 1 : 0, height: (questionOpened === 0) ? height0 : 0 },
        }),
        useSpring({
            from: { opacity: 0, height: 0 },
            to: { opacity: (questionOpened === 1) ? 1 : 0, height: (questionOpened === 1) ? height1 : 0 },
        }),
        useSpring({
            from: { opacity: 0, height: 0 },
            to: { opacity: (questionOpened === 2) ? 1 : 0, height: (questionOpened === 2) ? height2 : 0 },
        }),
        useSpring({
            from: { opacity: 0, height: 0 },
            to: { opacity: (questionOpened === 3) ? 1 : 0, height: (questionOpened === 3) ? height3 : 0 },
        }),
        useSpring({
            from: { opacity: 0, height: 0 },
            to: { opacity: (questionOpened === 4) ? 1 : 0, height: (questionOpened === 4) ? height4 : 0 },
        })
    ];

    const hoveredContactProps = useSpring({
        from: { left: (buttonHovered) ? '-150%' : '50%' },
        to: { left: (buttonHovered) ? '50%' : '-150%' },
        config: {
            duration: 200,
        }
    });

    const notHoveredContactProps = useSpring({
        from: { transform: (buttonHovered) ? 'translate3d(0%,0,0)' : 'translate3d(150%,0,0)' },
        to: { transform: (buttonHovered) ? 'translate3d(150%,0,0)' : 'translate3d(0%,0,0)' },
        config: {
            duration: 200,
        }
    });


    const handleQuestionClick = (questionNum) => {
        if (questionOpened === questionNum) {
            setQuestionOpened(-1)
        } else {
            setQuestionOpened(questionNum)
        }
    }

    const getQuestionStyle = (questionNum) => (questionNum === questionOpened) ? 'question-opened question pointer' : 'pointer question';

    const createQuestionAnswer = (questionNum) => {
            return <div>
                <p onClick={() => handleQuestionClick(questionNum)} className={getQuestionStyle(questionNum)}>{questionsAnswers[questionNum].question}</p>
                <animated.div className="answer" style={propsArray[questionNum]}>
                    <div ref={refs[questionNum]}>{questionsAnswers[questionNum].answer}</div>
                </animated.div>
            </div>
    };

    const contactButtonText = () => {
        return <div className="relative">
            <animated.div style={hoveredContactProps} className="absolute ask-question-text">Задайте свой вопрос!</animated.div>
            <animated.div style={notHoveredContactProps}>Не нашли нужный ответ?</animated.div>
        </div>;
    }

    return (
        <div className="padded-container faq-container margin-from-prev-comp">
            <h1 className="text-centered">Часто задаваемые вопросы</h1>
            {createQuestionAnswer(0)}
            <hr />
            {createQuestionAnswer(1)}
            <hr />
            {createQuestionAnswer(2)}
            <hr />
            {createQuestionAnswer(3)}
            <hr />
            {createQuestionAnswer(4)}
            <hr />
            <div className="contact-us-cnt">
                <div className="contact-us text-centered pointer"
                    onMouseEnter={() => setButtonHovered(true)}
                    onMouseLeave={() => setButtonHovered(false)}
                    onClick={() => console.log('clicked')}>
                    {contactButtonText()}
                </div>
            </div>
        </div>
    );
}

export default Faq;