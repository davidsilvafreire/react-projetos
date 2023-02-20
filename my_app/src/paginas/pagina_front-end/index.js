import React from "react";
import { Link } from "react-router-dom";
import Botao_voltar from '../../componentes/botao_voltar';

const Front_end = () =>
(
    <div>
        <h1>React JS</h1>

        <p>
            React é uma biblioteca JavaScript criação de interfaces de usuário e, nesse contexto, uma das tecnologias mais utilizadas pelo mercado. No guia abaixo você aprenderá quais são os pré-requisitos para iniciar no React do jeito certo e como criar as suas primeiras SPAs com ela.
        </p>

        <Link to="https://www.devmedia.com.br/react/">Guia do React</Link>

        <Botao_voltar />
    </div>
)
export default Front_end;