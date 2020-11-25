import React from 'react';
import { Link } from 'react-router-dom';

//Style
import './style.css';

export default function CreateAccount() {
    return (
        <div className="row align-items-center create-account">
            <div className="col-lg-9">
                <div className="title-main">
                    <h1>Vamos lá <br />
                    <span>crie uma conta</span></h1>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="dropdown dropdown-header px-0">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Cadastrar
                    </button>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to="/cadastro/candidato" className="dropdown-item">
                            Candidato
                        </Link>
                        <Link to="/cadastro/empresa" className="dropdown-item">
                            Empresa
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}