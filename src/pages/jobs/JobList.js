import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Components
import Header from '../../components/Header';
import BannerJobList from '../../components/BannerJobList';
import Filter from '../../components/Filter';
import { CardPrimary } from '../../components/UI/Card';
import Footer from '../../components/Footer';

//Assets
import LogoEmpresa1 from '../../assets/image/logo-empresa/1.png';
import LogoEmpresa2 from '../../assets/image/logo-empresa/2.png';
import LogoEmpresa3 from '../../assets/image/logo-empresa/3.png';
import LogoEmpresa4 from '../../assets/image/logo-empresa/4.png';
import LogoEmpresa5 from '../../assets/image/logo-empresa/5.png';

//Style
import './style.css';

export default function JobList() {

    //Simulando API
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
            level: "Junior",
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
        },
        {
            id: 4,
            jobName: "Dev.  Ruby on Rails",
            companyName: "Agenda Edu",
            logo: LogoEmpresa4,
            size: "Startup",
            level: "Sênior",
            contract: "CLT",
            topics: [
                { technology: "Teste unitários" },
                { technology: "Scrum" },
                { technology: "Ruby on Rails" },
                { technology: "API" },
                { technology: "SQL" },
            ]
        },
        {
            id: 5,
            jobName: "Dev. Full Stack",
            companyName: "Traive",
            logo: LogoEmpresa5,
            size: "Startup",
            level: "Sênior",
            contract: "PJ CLT",
            topics: [
                { technology: "React Native" },
                { technology: "Redux" },
                { technology: "AWS" },
                { technology: "ReactJS" },
                { technology: "JavaScript" },
                { technology: "NodeJS" },
            ]
        },
    ])
    return (
        <main>
            <div className="container">
                <Header />
                <BannerJobList />
            </div>
            <div className="background-oportunit">
                <div className="container">
                    <h1>Oportunidades</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <Filter />
                        </div>
                        <div className="col-lg-8 job-list">

                            {/* Lista de card sobre a vaga */}
                            {job.map(value => (
                                <div key={value.id}>
                                    <Link to={`/detalhe-vaga/${value.id}`} className="link-card">
                                        <CardPrimary
                                            job={value.jobName}
                                            cardStyle="horizontal"
                                            companyName={value.companyName}
                                            size={value.size}
                                            level={value.level}
                                            contract={value.contract}

                                            image={value.logo}
                                            alt={value.companyName}
                                            badgeName={value.topics}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Paginação */}
                    <div className="row justify-content-end">
                        <div className="col-12">
                            <div className="pagination">
                                <ul className="nav nav-tabs w-100 justify-content-end" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <p className="nav-link active"
                                            data-toggle="tab" role="tab"
                                            aria-selected="true">
                                        1
                                        </p>
                                    </li>
                                    <li className="nav-item">
                                        <p className="nav-link"
                                            data-toggle="tab" role="tab"
                                            aria-selected="false">
                                        2
                                        </p>
                                    </li>
                                    <li className="nav-item">
                                        <p className="nav-link"
                                            data-toggle="tab" role="tab"
                                            aria-selected="false">
                                        3
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
    </main >
    )
};