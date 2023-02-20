import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const Pagina_inicial = () =>
(
    <div>
        <h1>Escolha seu caminho em JavaScript</h1>

        <nav className='conteudo-opcoes'>
            <Link  className='front-end' to="/front-end">Página Front-end</Link>
            <Link className='back-end' to="/back-end">Página Back-end</Link>
        </nav>
    </div>
)
export default Pagina_inicial;