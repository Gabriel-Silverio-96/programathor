import React, { useState } from 'react';

//Components
import CreateAccountAndLogin from '../../components/CreateAccountAndLogin';
import { BtnPrimary } from '../../components/UI/Button';

//Assets
import BannerCriarContaCandidato from '../../assets/image/banner/banner-criar-conta-candidato.png';

export default function Candidates() {
    const [createAccount, SetCreateAccount] = useState({
        email: "",
        password: "",
        confirmedPassword: ""
    });

    const handleChange = (event) => {
        SetCreateAccount({ ...createAccount, [event.target.name]: event.target.value })
        console.log(createAccount)
    };

    function PostCreateAccount(e) {
        e.preventDefault();
        alert(JSON.stringify(createAccount));
    };

    return (
        <main className="background-light">
            <div className="container">
                <CreateAccountAndLogin
                    image={BannerCriarContaCandidato}
                    alt="Banner criar conta cadastro"
                    title="💻 Candidato"
                    subtitle="Conta destinadas para os candidatos, cadastre-se"
                >
                    <form onSubmit={PostCreateAccount}>
                        <div className="input-group">
                            {/* Campo de email */}
                            <label>Email</label>
                            <input type="email"
                             name="email"
                             onChange={handleChange}                              
                             placeholder="Ex: seuemail@email.com.br" />
                        </div>
                        <div className="input-group">
                            {/* Campo de senha */}
                            <label>Senha</label>
                            <input type="password" name="password" onChange={handleChange} placeholder="********" />
                        </div>
                        <div className="input-group">
                            {/* Campo de confirmação de senha */}
                            <label>Confirmar senha</label>
                            <input type="password" name="confirmedPassword" onChange={handleChange} placeholder="********" />
                        </div>

                        <div className="text-right">
                            <BtnPrimary name="Avançar" type="submit" />
                        </div>
                    </form>
                </CreateAccountAndLogin>
            </div>
        </main>
    )
}