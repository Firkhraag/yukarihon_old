import React, { createContext, useState } from 'react';

const InputFieldsContext = createContext();
export { InputFieldsContext };

export const InputFieldsProvider = props => {

    const [inputValues, setInputValues] = useState({ name: '', email: '', question: '' });

    const onNameChange = (event) => {
        let inputName = event.target.value;
        setInputValues({ ...inputValues, name: inputName })
    }

    const onEmailChange = (event) => {
        let inputEmail = event.target.value;
        setInputValues({ ...inputValues, email: inputEmail })
    }

    const onQuestionChange = (event) => {
        let inputQuestion = event.target.value;
        setInputValues({ ...inputValues, question: inputQuestion })
    }

    return <InputFieldsContext.Provider value={[inputValues, onNameChange, onEmailChange, onQuestionChange]}>
        { props.children }
    </InputFieldsContext.Provider>

}