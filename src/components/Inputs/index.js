import React from 'react';

//Style
import './style.css';

function Select(props) {
    return (
        <select class="custom-select">
            <option selected>Tecnologia</option>   
            {props.option.map(value => (
                <option key={value.id} value={value.technology}>{value.technology}</option>   
            ))}
        </select>
    )
}

export {Select};