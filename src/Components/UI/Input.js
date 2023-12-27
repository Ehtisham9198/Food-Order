import classes from './Input.module.css';
import HeaderCartButton from '../Layout/HeaderCartButton';
import { useRef } from 'react';
import React from 'react';

const Input = React.forwardRef((props,ref) => {

    return (<div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} ref={ref} />
    </div>
    )
});
export default Input;