import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

//Components
import Header from '../../components/Header';
import { BtnPrimary } from '../../components/UI/Button';

//Assets
import LogoEmpresa1 from '../../assets/image/logo-empresa/1.png';

export default function DetailJob() {
    // const { id } = useParams();

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
							{id: 1, technology: "Python" },
							{id: 2, technology: "DevOps" },
							{id: 3, technology: "PostgreSQL" },
						],
						detail:{
							jobDescription: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto",
							activites: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto",							
							requirements: [
								{id: 1, list: "Lorem Ipsum é um texto modelo da indústria tipográfica"},
								{id: 2, list: "Tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500"},
								{id: 3, list: "Quando uma misturou os caracteres de um texto"},
								{id: 4, list: "Lorem Ipsum é um texto modelo da indústria tipográfica"},
								{id: 5, list: "Tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500"},
								{id: 6, list: "Quando uma misturou os caracteres de um texto"},
							]
						}
				}					
    )

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
                        <BtnPrimary name="Me candidar" />
                    </div>
                </div>
                
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="job-description">
                            <h5>Descrição da vaga</h5>
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
                            <ul>
															{dataJob.detail.requirements.map(value => (
																<li key={value.id}>{value.list}</li>
															))}
                            </ul>
                        </div>
                    </div>
                    
                </div>


            </div>
        </div>
    </main>
)
}