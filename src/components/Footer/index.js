import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

//Assets
import Logo from '../../assets/logo-prograthor.svg';
import LogoParceiro from '../../assets/image/parceiros/onebit-code.png';
import LogoParceiroFGV from '../../assets/image/parceiros/logo-fgv.png';

//Style
import './style.css';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <img src={Logo} className="img-fluid" alt="Logo Programathor" />
                            <div className="social-media">
                                <a href="https://www.linkedin.com/company/programathor" target="_blank" rel="noreferrer">
                                    <FaLinkedin size={20} color="#000" />
                                </a>
                                <a href="https://www.facebook.com/ProgramaThorBr/" target="_blank" rel="noreferrer">
                                    <FaFacebook size={20} color="#000" />
                                </a>
                                <a href="https://instagram.com/ProgramaThor" target="_blank" rel="noreferrer">
                                    <FaInstagram size={20} color="#000" />
                                </a>
                                <a href="https://twitter.com/ProgramaThor" target="_blank" rel="noreferrer">
                                    <FaTwitter size={20} color="#000" />
                                </a>
                            </div>
                            <p className="text-dark">
                                ProgramaThor © 2020 <br />
                        Todos os direitos reservados
                    </p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-list">
                                <h5>Institucional</h5>
                                <ul>
                                    <li>Sobre nós</li>
                                    <li>Para empresa</li>
                                    <li>Para desenvolvedores</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-list">
                                <h5>Informações</h5>
                                <ul>
                                    <li>Perguntas frequêntes</li>
                                    <li>Termos</li>
                                    <li>Contatos</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="footer-list">
                                <h5>Parceiros</h5>
                                <a href="https://www.onebitcode.com" target="_blank" rel="noreferrer">
                                    <img src={LogoParceiro} className="img-fluid" alt="Logo parceiro OneBitCode" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container">
                <div className="align-items-center fgv">
                    <div className="logo-fgv">
                        <img width="150" src={LogoParceiroFGV} className="img-fluid" alt="Logo FGV" />
                    </div>
                    <div className="content-fgv">
                        <p>
                            ProgramaThor é acelerada pela GVentures<br/>
                            Aceleradora da FGV - Fundação Getulio Vargas.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}