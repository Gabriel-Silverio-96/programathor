import React, { useState } from 'react';

//Components
import CreateAccountAndLogin from '../../components/CreateAccountAndLogin';
import { BtnPrimary } from '../../components/UI/Button';

//Style
import './style.css';

//Assets
import BannerLogin from '../../assets/image/banner/banner-login.png';

export default function Login() {
    //Login candidato
    const [loginCandidates, SetLoginCandidates] = useState({
        email: "",
        password: "",        
    });

    const handleChangeCandidate = (event) => {
        SetLoginCandidates({ ...loginCandidates, [event.target.name]: event.target.value })
        console.log(loginCandidates)
    };

    function PostLoginCandidate(e) {
        e.preventDefault();
        alert(JSON.stringify(loginCandidates));
    };


    //Login empresa
    const [loginCompany, SetLoginCompany] = useState({
        email: "",
        password: "",        
    });

    const handleChangeCompany = (event) => {
        SetLoginCompany({ ...loginCompany, [event.target.name]: event.target.value })
        console.log(loginCompany)
    };

    function PostLoginCompany(e) {
        e.preventDefault();
        alert(JSON.stringify(loginCompany));
    };

    return (
        <main className="background-light">
            <div className="container">
                
                <CreateAccountAndLogin
                    image={BannerLogin}
                    alt="Banner criar conta cadastro"
                    title="Entrar na minha conta"
                >
                    <div className="tab-option">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#candidate" role="tab" aria-controls="candidate" aria-selected="true">Candidato</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#company" role="tab" aria-controls="company" aria-selected="false">Empresa</a>
                            </li>
                        </ul>
                        <div className="tab-content" style={{marginTop: "30px"}}>
                            {/* Login candidato */}
                            <div className="tab-pane fade show active" id="candidate" role="tabpanel" aria-labelledby="candidate-tab">
                                <form onSubmit={PostLoginCandidate}>
                                    <div className="input-group">
                                        {/* Campo de email */}
                                        <label>Email</label>
                                        <input type="email"
                                            name="email"
                                            onChange={handleChangeCandidate}
                                            placeholder="Ex: seuemail@email.com.br" />
                                    </div>
                                    <div className="input-group">
                                        {/* Campo de senha */}
                                        <label>Senha</label>
                                        <input type="password" name="password" onChange={handleChangeCandidate} placeholder="********" />
                                    </div>

                                    <div className="text-right">
                                        <BtnPrimary name="Avançar" type="submit" />
                                    </div>
                                </form>
                            </div>

                            {/* Login empresa*/}
                            <div className="tab-pane fade" id="company" role="tabpanel" aria-labelledby="company-tab">
                                <form onSubmit={PostLoginCompany}>
                                    <div className="input-group">
                                        {/* Campo de email */}
                                        <label>Email</label>
                                        <input type="email"
                                            name="email"
                                            onChange={handleChangeCompany}
                                            placeholder="Ex: seuemail@email.com.br" />
                                    </div>
                                    <div className="input-group">
                                        {/* Campo de senha */}
                                        <label>Senha</label>
                                        <input type="password" name="password" onChange={handleChangeCompany} placeholder="********" />
                                    </div>

                                    <div className="text-right">
                                        <BtnPrimary name="Avançar" type="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </CreateAccountAndLogin>
            </div>
        </main>
    )
};