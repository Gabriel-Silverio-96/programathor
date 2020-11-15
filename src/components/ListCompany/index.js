import React from 'react';

//Assets
import AnuncianteLogo1 from '../../assets/image/logo-empresa/anunciantes/1.png';
import AnuncianteLogo2 from '../../assets/image/logo-empresa/anunciantes/2.png';
import AnuncianteLogo3 from '../../assets/image/logo-empresa/anunciantes/3.png';
import AnuncianteLogo4 from '../../assets/image/logo-empresa/anunciantes/4.png';
import AnuncianteLogo5 from '../../assets/image/logo-empresa/anunciantes/5.png';
import AnuncianteLogo6 from '../../assets/image/logo-empresa/anunciantes/6.png';

export default function ListCompany() {
    return (
        <div className="list-company">
            <img src={AnuncianteLogo1} className="img-fluid" alt="Logo empresa anunciante" />
            <img src={AnuncianteLogo2} className="img-fluid" alt="Logo empresa anunciante" />
            <img src={AnuncianteLogo3} className="img-fluid" alt="Logo empresa anunciante" />
            <img src={AnuncianteLogo4} className="img-fluid" alt="Logo empresa anunciante" />
            <img src={AnuncianteLogo5} className="img-fluid" alt="Logo empresa anunciante" />
            <img src={AnuncianteLogo6} className="img-fluid" alt="Logo empresa anunciante" />
        </div>
    )
}