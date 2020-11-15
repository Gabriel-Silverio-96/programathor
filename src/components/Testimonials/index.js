import React from 'react';

//Assets


//Style
import './style.css';

export default function Testimonials(props) {
    return (
        <div className="testimonials">
            <div className="user-area">
                <img src={props.imgUser} className="img-fluid" alt="Foto usuário" />
                <div className="user-info">
                    <h5>{props.dev}</h5>
                    <span>💻 {props.jobName}</span>
                </div>
            </div>
            <div className="content">
                <p className="aspas">"</p>
                <p>
                   {props.content}
                </p>
            </div>
        </div>
    )
} 