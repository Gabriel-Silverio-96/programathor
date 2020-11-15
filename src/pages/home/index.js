import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiDollarSign, FiTerminal } from 'react-icons/fi';

//Components
import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import { BtnSecondary } from '../../components/UI/Button';
import { Card } from '../../components/UI/Card/index';

//Style
import './style.css';

//Assets
import LogoEmpresa1 from '../../assets/image/logo-empresa/1.png';
import LogoEmpresa2 from '../../assets/image/logo-empresa/2.png';
import LogoEmpresa3 from '../../assets/image/logo-empresa/3.png';

import BannerSoProgrmadores from '../../assets/image/banner/banner-soprogrmadores.png';
import BannerAlerta from '../../assets/image/banner/banner-alerta.png';
import BannerGratuito from '../../assets/image/banner/banner-gratuito.png';

function App() {
	const [job, SetJob] = useState([
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
		console.log(job[0].topics),
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
							<div className="col-lg-4" id={value.id}>
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
			</article>

		</main >

	);
}

export default App;
