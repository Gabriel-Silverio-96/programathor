import React from 'react';
import { Link } from 'react-router-dom';

import {DiPhp, DiReact, DiPython, DiNodejsSmall} from 'react-icons/di';

//Components
import {BtnPrimary} from '../../components/UI/Button';

//Style
import './style.css';
import './icon-banner.css';

export default function BanneMain() { 
    return (           
        <div className="row position-relative">        
            <div className="col-lg-8 m-auto text-center">
                <div className="banner-main">
                    <div className="title-main">
                        <h1>Oportunidades para</h1>
                        <h1>programadores <span>Python</span></h1>
                    </div>
                    <p>Tenha acesso a diversas oportunidades <br/> para desenvolvedores</p>
                    <Link to="/vagas">
                        <BtnPrimary name="Buscar Vagas"/>
                    </Link>
                </div>
            </div>
            <div className="icon-style icon-primary">
                <DiPhp size={75} color="#C6C6D0"/>
            </div>

            <div className="icon-style icon-secondary">                
                <DiReact size={75} color="#C6C6D0"/>
            </div>

            <div className="icon-style icon-third">                
                <DiNodejsSmall size={75} color="#C6C6D0"/>
            </div>

            <div className="icon-style icon-fourth">                
                <DiPython size={75} color="#C6C6D0"/>
            </div>            
        </div>
    )
}