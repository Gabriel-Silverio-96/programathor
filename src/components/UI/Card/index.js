import React from 'react';
import { FiBriefcase, FiClipboard, FiBarChart, FiCheckCircle } from 'react-icons/fi';

//Style
import './style.css';

function CardPrimary(props) {
    return (
        <div className={props.cardStyle === "horizontal" ? "card card-horizontal" : "card" }>
            {/* Logo empresa */}
            <img
                style=
                {{
                     width: props.widthImage === undefined ? "150px" : props.widthImage,
                     height: "150px",
                     objectFit: "contain",
                }}

                className="card-img-top"
                src={props.image}
                alt={props.alt}
            />
            <div className="card-body">

                {/* Nome da vaga */}
                <h3 className="card-title">{props.job}</h3>

                <div className="info">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="icon-info">
                                <FiBriefcase size={20} color="#2013DB"></FiBriefcase>
                                {/* Nome da empresa */}
                                <span>{props.companyName}</span>
                            </div>

                            <div className="icon-info">
                                <FiClipboard size={20} color="#2013DB"></FiClipboard>
                                {/* Tamanho da empresa */}
                                <span>{props.size}</span>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="icon-info">
                                <FiBarChart size={20} color="#2013DB"></FiBarChart>
                                {/* Nível do cargo (Ex: Júnior, Pleno, Sênior */}
                                <span>{props.level}</span>
                            </div>

                            <div className="icon-info">
                                <FiCheckCircle size={20} color="#2013DB"></FiCheckCircle>
                                {/* Tipo de contrato (Ex: PJ, CLT) */}
                                <span>{props.contract}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Características da vaga (Ex: MySQL, ORM, Elixir) */}
                <div className="badger-area">
                    {props.badgeName.map(value => (
                        <span key={value.technology} className="badge badge-primary">
                            {value.technology}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}


function CardSecundary(props) {
    return(
        <span>Top</span>
    )
}

export { CardPrimary, CardSecundary }