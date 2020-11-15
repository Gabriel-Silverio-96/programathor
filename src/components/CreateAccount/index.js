import React from 'react';

//Components
import { BtnPrimary } from '../../components/UI/Button';

//Style
import './style.css';

export default function CreateAccount() {
    return (
        <div className="row align-items-center create-account">
            <div className="col-lg-9">
                <div className="title-main">
                    <h1>Vamos lá <br/>
                    <span>crie uma conta</span></h1>
                </div>
            </div>
            <div className="col-lg-3">
                <BtnPrimary name="Cadastrar" />
            </div>
        </div>
    )
}