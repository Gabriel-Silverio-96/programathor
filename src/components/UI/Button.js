import React from 'react';

function BtnPrimary(props) {
    return(
        <button className="btn btn-primary" type={props.type === undefined ? "button": props.type}>
            {/* Name button*/}
            {props.name === undefined ? "Button primary" : props.name}
        </button>
    )
}

function BtnSecondary(props) {
    return(
        <button className="btn btn-secondary">
            {/* Name button*/}
            {props.name === undefined ? "Button secondary" : props.name}
        </button>
    )
}

function BtnOutlinePrimary(props) {
    return(
        <button className="btn btn-outline-primary dropdown-toggle" type="button">
            {/* Name button*/}
            {props.name === undefined ? "Button outline primary" : props.name}
        </button>
    )
}

export {BtnPrimary, BtnSecondary, BtnOutlinePrimary};