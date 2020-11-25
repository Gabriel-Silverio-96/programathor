import React from 'react';
import { Link } from 'react-router-dom';
import { BtnSecondary } from '../../components/UI/Button';

//Style
import './style.css';

export default function Page404() {
    return (
        <main className="center-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        <div className="title-large">
                            <h1>404</h1>
                            <p>Página buscada, não foi encontrada</p>
                            <Link to="/">
                                <BtnSecondary name="Voltar a página inicial" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}