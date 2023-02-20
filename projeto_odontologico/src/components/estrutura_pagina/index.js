import React from "react";
import Rodape from "../Rodape";

import Topo from "../Topo";

const Estrutura_Pagina = (props) =>
{
    return(
        <section>
            <Topo />

               {props.children}

            <Rodape />
        </section>
    );
};

export default Estrutura_Pagina;