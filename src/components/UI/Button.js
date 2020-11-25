import React from 'react';
import { ScrollTop } from '../Util';

function BtnPrimary(props) {
    return(
        <button className="btn btn-primary" 
            type={props.type === undefined ? "button": props.type}
            onClick={props.click}            
        >
            {/* Name button*/}
            {props.name === undefined ? "Button primary" : props.name}
        </button>
    )
}

function BtnSecondary(props) {
    return(
        <button className="btn btn-secondary" onClick={ScrollTop}>
            {/* Name button*/}
            {props.name === undefined ? "Button secondary" : props.name}
        </button>
    )
}

function BtnOutlinePrimary(props) {    
    return(
        <button className={props.name.props.btnicon === "true" 
            ? "btn btn-outline-primary btn-icon" 
            : "btn btn-outline-primary "} 
            type="button"            
        >

        {/* Name button*/}
        {props.name === undefined ? "Button outline primary" : props.name}
        {props.children}
        </button>
    )
}

export {BtnPrimary, BtnSecondary, BtnOutlinePrimary};