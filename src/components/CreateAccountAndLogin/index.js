import React from 'react';

//Style
import './style.css'

export default function CreateAccountAndLogin(props) {
    return (
        <div className="row height-100vh">
            <div className="col-lg-10 m-auto">
                <div className="register-area">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid banner-form" src={props.image} alt={props.alt} />
                        </div>
                        <div className="col-lg-6 form-content">
                            <h1>{props.title}</h1>
                            <p>{props.subtitle}</p>

                            {props.children}    
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    )
}