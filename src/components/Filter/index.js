import React from 'react';

//Style
import './style.css';

export default function Filter() {
    return (
        <div className="filter">
            {/* Filtro cidade */}
            <div className="filter-option">
                <h6>Cidade</h6>
                <input type="text" />
            </div>

            {/* Filtro tipo contrato */}
            <div className="filter-option">
                <h6>Contrato</h6>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <p class="nav-link active"
                            data-toggle="tab" role="tab"
                            aria-selected="true">                                
                            CLT
                        </p>
                    </li>
                    <li class="nav-item">
                        <p class="nav-link"
                            data-toggle="tab" role="tab"
                            aria-selected="false">
                            PJ
                        </p>
                    </li>
                    <li class="nav-item">
                        <p class="nav-link"
                            data-toggle="tab" role="tab"
                            aria-selected="false">
                            Estágio
                        </p>
                    </li>
                </ul>
            </div>

            {/* Filtro nível de experiência */}
            <div className="filter-option">
                <h6>Nível de experiência</h6>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <p class="nav-link active"
                            data-toggle="tab" role="tab"                                
                            aria-selected="true"> 
                            Júnior
                        </p>
                    </li>
                    <li class="nav-item">
                        <p class="nav-link"
                            data-toggle="tab" role="tab"
                            aria-selected="false">
                            Pleno
                        </p>
                    </li>
                    <li class="nav-item">
                        <p class="nav-link"
                            data-toggle="tab" role="tab"
                            aria-selected="false">
                            Sênior
                        </p>
                    </li>
                </ul>
            </div>

            {/* Filtro tamanho da empresa */}
            <div className="filter-option">
                <h6>Tamanho da empresa</h6>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <p class="nav-link active"
                            data-toggle="tab" role="tab"                            
                            aria-selected="true">                                
                            Startup
                        </p>
                    </li>
                    <li class="nav-item">
                        <p class="nav-link"
                            data-toggle="tab" role="tab"
                            aria-selected="false">
                            Pequena/média
                        </p>
                    </li>
                    <li class="nav-item">
                        <p class="nav-link"
                            data-toggle="tab" role="tab"
                            aria-selected="false">
                            Grande
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}