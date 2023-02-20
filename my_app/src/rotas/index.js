import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Pagina_inicial from '../pagina_inicial';
import Front_end from '../pagina_front-end';
import Back_end from '../pagina_back-end';

const Rotas = () =>
(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element = {<Pagina_inicial/>} />
            <Route path='/front-end' element = {<Front_end/>}/>
            <Route path='/back-end' element = {<Back_end/>}/>
        </Routes>
    </BrowserRouter>
)
export default Rotas;