import React from 'react';

//Style
import './style.css';

function Select(props) {
    return (
        <select className="custom-select">
            <option defaultValue>Tecnologia</option>   
            {props.option.map(value => (
                <option key={value.id} value={value.technology}>{value.technology}</option>   
            ))}
        </select>
    )
}

export {Select};