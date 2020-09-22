import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { useSwipeable } from 'react-swipeable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Helmet } from "react-helmet";

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Events from './components/Events/Events';
import Contacts from './components/Contacts/Contacts';
import Faq from './components/Faq/Faq';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Partners from './components/Partners/Partners';
import DonateDrawer from './components/DonateDrawer/DonateDrawer';
import Policy from './components/Policy/Policy';
import { CardStatesProvider } from './store/CardStatesStore';
import { InputFieldsProvider } from './store/InputFieldsStore';
import { WindowPropertiesProvider } from './store/WindowPropertiesStore';
import './App.css';

const App = () => {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const [donateDrawerOpen, setDonateDrawerOpen] = useState(false);
    const [backdropOpen, setBackdropOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showFinish, setShowFinish] = useState(false);
    const [finishMsg, setFinishMsg] = useState('');
    const [policyOpened, setPolicyOpened] = useState(false);

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen);
        setBackdropOpen(!backdropOpen);
    };

    const closeToggleClickHandler = () => {
        setSideDrawerOpen(false);
        setBackdropOpen(false);
        setShowForm(false);
        setShowFinish(false);
    };

    const openForm = () => {
        setBackdropOpen(true);
        setShowForm(true);
    };

    const openFinish = (msg) => {
        setFinishMsg(msg);
        setBackdropOpen(true);
        setShowFinish(true);
    };

    if ((showForm || showFinish) && (!policyOpened)) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }

    const swipeHandler = useSwipeable({ onSwipedRight: (eventData) => {
        setDonateDrawerOpen(false);
    }});

    return (
        <WindowPropertiesProvider>
        <InputFieldsProvider>
        <CardStatesProvider>
            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Юкарихон: стрелы и строфы</title>
                <meta name="keywords" content="История и культура Японии, Средневековая Япония, Школа японистики в Москве"/>
                <meta name="description" content="Интересуешься Японией? Чем занимаются люди, которые изучают Японию? — спрашиваешь ты. Дать ответ на эти и многие другие вопросы — цель нашего проекта."/>
            </Helmet> */}
        <Router>
            <Switch>
                <Route path="/privacy">
                    <Element name="policy">
                        <Policy />
                    </Element>
                </Route>
                {/* <Route>
                    <Nav drawerToggleClickHandler={drawerToggleClickHandler} setDonateDrawerOpen={setDonateDrawerOpen} />
                    <DonateDrawer close = {() => setDonateDrawerOpen(false)} show={donateDrawerOpen} />
                    <div onClick={() => setDonateDrawerOpen(false)} {...swipeHandler}>
                        <SideDrawer closeButtonClick={closeToggleClickHandler} show={sideDrawerOpen} />
                        <Backdrop show={backdropOpen} click={closeToggleClickHandler} showForm={showForm} showFinish={showFinish} finishMsg={finishMsg} setPolicyOpened={setPolicyOpened} />
                        <Element name="home">
                            <Home />
                        </Element>
                        <Element name="about">
                            <About />
                        </Element>
                        <Element name="events">
                            <Events openFinish={openFinish} />
                        </Element>
                        <Element name="faq">
                            <Faq buttonClick={openForm} />
                        </Element>
                        <Element name="contacts">
                            <Contacts />
                        </Element>
                        <Partners />
                        <div className="full-width footer grad-bg relative flex-centered-vert desktop-font" >
                        </div>
                    </div>
                </Route> */}
                <Route path="/yukarihon_old">
                <WindowPropertiesProvider>
                    <InputFieldsProvider>
                    <Nav drawerToggleClickHandler={drawerToggleClickHandler} setDonateDrawerOpen={setDonateDrawerOpen} />
                    <DonateDrawer close = {() => setDonateDrawerOpen(false)} show={donateDrawerOpen} />
                    <div onClick={() => setDonateDrawerOpen(false)} {...swipeHandler}>
                        <SideDrawer closeButtonClick={closeToggleClickHandler} show={sideDrawerOpen} />
                        <Backdrop show={backdropOpen} click={closeToggleClickHandler} showForm={ showForm } />
                        <Element name="home">
                            <Home />
                        </Element>
                        <Element name="about">
                            <About />
                        </Element>
                        <Element name="events">
                            <CardStatesProvider>
                                <Events />
                            </CardStatesProvider>
                        </Element>
                        <Element name="faq">
                            <Faq buttonClick={openForm} />
                        </Element>
                        <Element name="contacts">
                            <Contacts />
                        </Element>
                        <Partners />
                        <div className="full-width footer grad-bg relative flex-centered-vert desktop-font" >
                        </div>
                    </div>
                    </InputFieldsProvider>
                </WindowPropertiesProvider>
                </Route>
                <Route path="/privacy">
                    <Policy />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
        </CardStatesProvider>
        </InputFieldsProvider>
        </WindowPropertiesProvider>
    );
}

export default App;
