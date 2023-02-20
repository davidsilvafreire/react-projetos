import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contato from "../pages/Contato";

const Rotas = () =>
{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;