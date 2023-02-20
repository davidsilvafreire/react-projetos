import React from "react";

import Estrutura_Pagina from '../../components/estrutura_pagina';
import Mapa from '../../components/Mapa';
import './style.css';

const Contato = () =>
{
    return(
        <Estrutura_Pagina>
            <div className="contato-container">
                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Horário de <b>atendimento</b></h2>

                    <p>Agende uma consulta pelo telefone: (11) 0 0000-0000</p>




                    <ul className="lista-medicos">
                        <li>
                            <img className="img-aparelho" src="assets/medico01.png" alt="Dr. Hélio" title="Dr. Hélio"/>
                            <p>Dr Hélio</p>
                            <p>SEGUNDAS, QUARTAS e SEXTAS das 09:00 às 16:00</p>
                        </li>

                        <li><img className="img-aparelho" src="assets/medico02.png" alt="Dr. Carlos" title="Dr. Carlos"/>
                            <p>Dr. Carlos</p>
                            <p>TERÇAS e QUINTAS das 13:00 às 18:00</p>
                        </li>

                        <li><img className="img-aparelho" src="assets/medico03.png" alt="Dra. Suzana" title="Dra. Suzana"/>
                            <p>Dra. Suzana</p>
                            <p>TERÇAS, QUINTAS E SÁBADOS das 08:00 às 12:00</p>
                        </li>
                    </ul>
                </div>





                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Onde estamos <b>localizados</b>?</h2>

                    <p>Av. Ogum, 03 - Jd. Novo Horizonte, São Paulo - SP. CEP: 0000-000</p>

                    <Mapa />
                </div>

            </div>
        </Estrutura_Pagina>
    )
}

export default Contato;