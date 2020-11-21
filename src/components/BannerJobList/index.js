import React, { useState } from 'react';

//Components
import { Select } from '../UI/Inputs';

//Assets
import BannerJob from '../../assets/image/banner/banner-vaga-lista.png';

//Style
import './style.css';


export default function BannerJobList() {
    const [technologyList] = useState([
        {
            id: 1,
            technology: "Python"
        },
        {
            id: 2,
            technology: "Ruby"
        },
        {
            id: 3,
            technology: ".NET"
        },
        {
            id: 4,
            technology: "PHP"
        },
        {
            id: 5,
            technology: "NodeJS"
        },
    ])
    return (        
        <div className="row align-items-center col-banner-job">
            <div className="col-lg-6">
                <div className="banner-job">
                    <div className="title-job">
                        <h2>
                            Vagas para<br />
                            programadores<br />
                            e desenvolvedores
                        </h2>
                    </div>
                    <p>Selecione uma tecnologia</p>
                    <Select option={technologyList}/>
                </div>
            </div>
            <div className="col-lg-6">
                <img src={BannerJob} className="img-fluid" alt="Banner vagas"/>
            </div>
        </div>
    )
}