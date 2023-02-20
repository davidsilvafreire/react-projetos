import React from "react";
import './style.css'
import { Link } from "react-router-dom";
const Botao_voltar = () =>
(
    <div className="area_botao">
        <Link className="botao-voltar" to="/">Voltar</Link>
    </div>
)
export default Botao_voltar;