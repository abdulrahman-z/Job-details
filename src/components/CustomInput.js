import React from 'react';
import inputStyle from '../components/Input.module.css';

function CustomInput(props) {
    return (
        <input className={inputStyle.input}  placeholder={props.placeholder} /> 
    );
}

export default CustomInput;