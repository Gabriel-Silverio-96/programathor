import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Components
import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import { BtnSecondary } from '../../components/UI/Button';
import Cta from '../../components/Cta';
import ListCompany  from '../../components/ListCompany';
import { Card } from '../../components/UI/Card/index';
import Testimonials from '../../components/Testimonials';
import CreateAccount from '../../components/CreateAccount';

//Style
import './style.css';

//Assets
import LogoEmpresa1 from '../../assets/image/logo-empresa/1.png';
import LogoEmpresa2 from '../../assets/image/logo-empresa/2.png';
import LogoEmpresa3 from '../../assets/image/logo-empresa/3.png';

import ImgUser1 from '../../assets/image/user-face/1.png';
import ImgUser2 from '../../assets/image/user-face/2.png';
import ImgUser3 from '../../assets/image/user-face/3.png';

function App() {
    const [job] = useState([
        {
            id: 1,
            jobName: "Software Engineer",
            companyName: "Voxy",
            logo: LogoEmpresa1,
            size: "Startup",
            level: "Pleno",
            contract: "CLT",
            topics: [
                { technology: "Python" },
                { technology: "DevOps" },
                { technology: "PostgreSQL" },
            ]
        },
        {
            id: 2,
            jobName: "NodeJS",
            companyName: "Cognizant",
            logo: LogoEmpresa2,
            size: "Grande empresa",
            level: "Pleno",
            contract: "CLT",
            topics: [
                { technology: "JavaScript" },
                { technology: "NodeJS" },
                { technology: "Java" },
            ]
        },
        {
            id: 3,
            jobName: "Dev. PHP",
            companyName: "Ipbox",
            logo: LogoEmpresa3,
            size: "Pequena",
            level: "Pleno",
            contract: "PJ",
            topics: [
                { technology: "Docker" },
                { technology: "PHP" },
                { technology: "MySQL" },
                { technology: "Linux" },
                { technology: "Git" },
            ]
        }
    ])

    return (
        <main>
            <div className="container">
                <Header />
                <BannerMain />
            </div>
            <div className="background-color background-margin">
                <div className="container">
                    <div className="background-title">
                        <h1>Nossas últimas vagas</h1>
                    </div>
                    <div className="row card-jobs">
                        {job.map(value => (
                            <div className="col-lg-4" key={value.id}>
                                <Card
                                    job={value.jobName}
                                    companyName={value.companyName}
                                    size={value.size}
                                    level={value.level}
                                    contract={value.contract}

                                    image={value.logo}
                                    alt={value.companyName}
                                    badgeName={value.topics}
                                />
                            </div>
                        ))}
                        <Link to="/vagas">
                            <BtnSecondary name="Mais vagas" />
                        </Link>
                    </div>
                </div>
            </div>

            <article className="container">
                {/* Call to action */}
                <Cta />

                <div className="row">
                    <div className="col-lg-7 mx-auto text-center">
                        <h1>Algumas das centenas de empresas que recrutam na <br /> ProgramaThor</h1>
                    </div>
                    <div className="col-lg-12">
                      <ListCompany />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mx-auto text-center">
                        <h1>Depoimentos dos desenvolvedores</h1>
                    </div>
                    <div className="col-lg-4">
                       <Testimonials 
                            imgUser={ImgUser1}
                            dev="Júlia Guimaraes"
                            jobName="Dev front-end"
                            content="
                            A plataforma oferece um cadastro de maneira intuitiva,
                            bem como testes com os quais você pode demonstrar suas habilidades.
                            Em pouco tempo consegui agendar entrevistas e me inserir no mercado.
                            "
                       />
                    </div>
                    <div className="col-lg-4">
                       <Testimonials 
                            imgUser={ImgUser2}
                            dev="Carlos Cordeiro"
                            jobName="Dev FullStack"
                            content="
                            Depois de 4 meses procurando em vários sites de emprego, 
                            fiz meu cadastro na ProgramaThor, que por seu foco específico 
                            para programadores me permitiu facilmente encontrar uma vaga com o 
                            match de 94%, em 3 semanas consegui recolocação no mercado de trabalho. 
                            Obrigado Equipe ProgramaThor!.
                            "
                       />
                    </div>

                    <div className="col-lg-4">
                       <Testimonials 
                            imgUser={ImgUser3}
                            dev="Viviane Kreizer"
                            jobName="Dev Backend"
                            content="
                            Gostei muito da plataforma, facilita muito a vida de quem é desenvolvedor,
                            indicando se a vaga é compatível com seu perfil.
                            "
                       />
                    </div>
                </div>
                <CreateAccount />

            </article>
        </main >

    );
}

export default App;
