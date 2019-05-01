import React from 'react';
import './Button.scss';


const Button = (props) => (
  <button className={`Button ${props.className}`} onClick={props.onClick}>
    {props.name || 'Button'}
  </button>
)

export default Button;