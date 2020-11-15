import React from 'react';
import { Link } from 'react-router-dom';

//Assets
import Logo from '../../assets/logo-prograthor.svg';

//Style
import './style.css';

export default function Headers() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light px-0">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="Logo Programathor" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto aling-items-center">
                        <li className="nav-item">
                            <Link to="/vagas" className="nav-link">
                                Vagas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/empresas" className="nav-link">
                                Empresas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item ml-0">
                            <div className="dropdown dropdown-header">
                                <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Cadastrar
                                </button>                            
                                
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link to="/cadastro/candidato" className="dropdown-item">
                                        Cadidato
                                    </Link>
                                    <Link to="/cadastro/empresa" className="dropdown-item">
                                        Empresa
                                    </Link>                                
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}