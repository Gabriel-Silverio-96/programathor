import React from 'react';
import { FiBell, FiDollarSign, FiTerminal } from 'react-icons/fi';

//Assets
import BannerSoProgrmadores from '../../assets/image/banner/banner-soprogrmadores.png';
import BannerAlerta from '../../assets/image/banner/banner-alerta.png';
import BannerGratuito from '../../assets/image/banner/banner-gratuito.png';

export default function Cta() {
    return (
        <div>
            <div className="row align-items-center cta">
                <div className="col-lg-6">
                    <img className="img-fluid" src={BannerSoProgrmadores} alt="Banner Só programadores" />
                </div>
                <div className="offset-lg-1"></div>
                <div className="col-lg-5">
                    <div className="icon-cta">
                        <FiTerminal size={35} />
                    </div>
                    <h2>Só para <br /> programadores</h2>
                    <p>
                        Somos uma plataforma 100% dedicada ao recrutamento de programadores.
                    </p>
                </div>
            </div>

            <div className="row align-items-center cta flex-row-reverse">
                <div className="col-lg-6">
                    <img className="img-fluid" src={BannerAlerta} alt="Banner Alerta" />
                </div>
                <div className="offset-lg-1"></div>
                <div className="col-lg-5">
                    <div className="icon-cta">
                        <FiBell size={35} />
                    </div>
                    <h2>Alertas <br /> de Matching</h2>
                    <p>
                        Nosso sistema de matching permite que você seja notificado apenas
                        em casos de compatibilidade com uma nova vaga.
						</p>
                </div>
            </div>

            <div className="row align-items-center cta">
                <div className="col-lg-6">
                    <img className="img-fluid" src={BannerGratuito} alt="Banner 100% gratuito" />
                </div>
                <div className="offset-lg-1"></div>
                <div className="col-lg-5">
                    <div className="icon-cta">
                        <FiDollarSign size={35} />
                    </div>
                    <h2>100% gratuito</h2>
                    <p>
                        Basta se cadastrar e completar o perfil para se
                        candidatar gratuitamente a qualquer vaga compatível com você.
                    </p>
                </div>
            </div>
        </div>
    )
}