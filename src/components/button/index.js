import React from "react";
import './style.css'

const Button = (props) =>{
    return <button className="button-container" onClick={props.event}>{props.tittle}</button>
}

export default Button;