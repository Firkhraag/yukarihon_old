import React, { createContext, useState, useEffect } from 'react';

const WindowPropertiesContext = createContext();
export { WindowPropertiesContext };

// function reducer(state, action) {
//     switch(action.type) {
//         case 'UPDATE_WINDOW_SIZE':
//             return {...state, width: action.payload, height: action.payload };
//         default:
//             throw Error('Reducer error');
//     }
// }

export const WindowPropertiesProvider = props => {

    const [windowProperties, setWindowProperties] = useState({ navVisible: true });
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
        setPrevScrollpos(currentScrollPos);
        setWindowProperties({ navVisible: visible })
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);

        }
    });

    return (
        <WindowPropertiesContext.Provider value={[windowProperties]}>
            { props.children }
        </WindowPropertiesContext.Provider>
    );
}