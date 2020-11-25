import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

import { FiBriefcase, FiClipboard, FiBarChart, FiCheckCircle } from 'react-icons/fi';

//Components
import Header from '../../components/Header';
import { BtnPrimary, BtnSecondary } from '../../components/UI/Button';
import Map from '../../components/Map';
import CreateAccount from '../../components/CreateAccount';
import SocialMediaPost from '../../components/SocialMediaPost';
import Footer from '../../components/Footer';

//Assets
import LogoEmpresa1 from '../../assets/image/logo-empresa/1.png';
import Logo from '../../assets/logo-prograthor.svg';
import BackgroundPost from '../../assets/image/SocialMediaPost/background-post.png';

//Style
import './style.css';

export default function DetailJob() {
    // const { id } = useParams();

    //Simulando API
    const [dataJob] = useState(
        {
            id: 1,
            jobName: "Software Engineer",
            companyName: "Voxy",
            logo: LogoEmpresa1,
            size: "Startup",
            level: "Pleno",
            contract: "CLT",
            topics: [
                { id: 1, technology: "Python" },
                { id: 2, technology: "DevOps" },
                { id: 3, technology: "PostgreSQL" },                
            ],
            adress: {
                position: [-23.6144585, -46.7483466],
                street: "R. Francisco Marcondes Viêira",
                number: 3,
                neigh: "Vila Sonia",
                city: "São Paulo",
                state: "SP",
                zipCode: "05639-090",
            },
            detail: {
                jobDescription: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto",
                activites: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto",
                requirements: [
                    { id: 1, list: "Lorem Ipsum é um texto modelo da indústria tipográfica" },
                    { id: 2, list: "Tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500" },
                    { id: 3, list: "Quando uma misturou os caracteres de um texto" },
                    { id: 4, list: "Lorem Ipsum é um texto modelo da indústria tipográfica" },
                    { id: 5, list: "Tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500" },
                    { id: 6, list: "Quando uma misturou os caracteres de um texto" },
                ]
            }
        }
    );

    //Url Google maps fazer rota
    const urlGoogleMap = `https://www.google.com/maps/place/ProgramaThor/@${dataJob.position},15z/data=!4m5!3m4!1s0x0:0xa70316251c1919d0!8m2!3d-23.6144585!4d-46.7483466`
    return (
        <main>
            <div className="container">
                <Header />

                <div className="job-detail">
                    <img src={LogoEmpresa1} className="img-fluid" alt="Logo empresa" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="badger-area mb-3">
                                {dataJob.topics.map(value => (
                                    <span key={value.id} className="badge badge-primary">
                                        {value.technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="title-main">
                                <h1>{dataJob.jobName}</h1>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <BtnSecondary name="Me candidar a vaga" />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="job-description">
                                <h5>Descrição da vaga</h5>

                                <div className="icon-info icon-detail-job">
                                    <FiBriefcase size={20} color="#2013DB"></FiBriefcase>
                                    {/* Nome da empresa */}
                                    <span>{dataJob.companyName}</span>

                                    <FiClipboard size={20} color="#2013DB"></FiClipboard>
                                    {/* Tamanho da empresa */}
                                    <span>{dataJob.size}</span>

                                    <FiBarChart size={20} color="#2013DB"></FiBarChart>
                                    {/* Nível do cargo (Ex: Júnior, Pleno, Sênior */}
                                    <span>{dataJob.level}</span>

                                    <FiCheckCircle size={20} color="#2013DB"></FiCheckCircle>
                                    {/* Tipo de contrato (Ex: PJ, CLT) */}
                                    <span>{dataJob.contract}</span>
                                </div>

                                <p>
                                    {dataJob.detail.jobDescription}
                                </p>
                            </div>

                            <div className="job-description">
                                <h5>Atividades e responsabilidades</h5>
                                <p>
                                    {dataJob.detail.activites}
                                </p>
                            </div>

                            <div className="job-description">
                                <h5>Requisitos</h5>
                                <ul className="requirements position-relative">
                                    {dataJob.detail.requirements.map(value => (
                                        <li key={value.id}>{value.list}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="job-description">
                                <div className="local">
                                    <div>
                                        <h5>Localização</h5>
                                        <p className="mb-1">{dataJob.adress.street}, {dataJob.adress.number} - {dataJob.adress.neigh}</p>
                                        <p>{dataJob.adress.zipCode} | {dataJob.adress.city} - {dataJob.adress.state}</p>

                                    </div>
                                    <a href={urlGoogleMap} target="_blank" rel="noreferrer">
                                        <BtnPrimary name="Fazer uma rota" />
                                    </a>
                                </div>
                                <div className="map-area">
                                    <Map position={dataJob.adress.position} companyName={dataJob.companyName} />
                                </div>
                            </div>
                        </div>

                        {/* Post area */}

                        <div className="col-lg-8 m-auto">
                            <div className="title-main text-center title-margin-share">
                                <h1>Compartilhe essa oportunidade</h1>
                            </div>
                        </div>

                        <SocialMediaPost
                            width="1080"
                            height="1080"

                            backgroundImg={{
                                URLImg: BackgroundPost,
                                PositionX: 0,
                                PositionY: 0,
                            }}

                            logoPost={{
                                URLImg: Logo,
                                LogoY: 950,
                                width: 215,
                                height: 42
                            }}

                            titleMain={{
                                title: dataJob.jobName,
                                size: "100px",
                                color: "#000000",
                                fontFamily: "Epilogue",
                                fontWeight: 800,
                                titleX: 70,
                                titleY: 280,
                            }}

                            titleSmall={{
                                title: "Oportunidade na " + dataJob.companyName + " para",
                                size: "35px",
                                color: "#948E8E",
                                titleSmallX: 70,
                                titleSmallY: 175,
                            }}

                            content={{
                                text: "Desejável conhecimento em:",
                                textX: 70,
                                textY: 400,
                                color: "#2013DB",
                                topics: dataJob.topics
                            }}
                        />
                    </div>
                    <CreateAccount />
                </div>
            </div>
            <Footer />
        </main >
    )
}