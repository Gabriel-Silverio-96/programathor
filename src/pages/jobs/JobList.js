import React, { useState } from 'react';

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


//Style
import './style.css'

export default function JobList() {
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
                <BannerJobList />
            </div>
            <div className="background-oportunit">
                <div className="container">
                    <h1>Oportunidades</h1>

                    <div className="row">
                        <div className="col-lg-4">
                            <Filter />
                        </div>
                        <div className="col-lg-8">
                            <div className="job-list"></div>

                            {job.map(value => (
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}