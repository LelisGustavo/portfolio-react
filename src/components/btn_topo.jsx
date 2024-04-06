import React from "react";
import ImgTopo from '../images/btnNavInicio.png';

const BtnTopo = () => (

    // Botão para retornar ao início do site
    <div className="btnNav">

        <a href="#top">

            <img 
                src={ImgTopo} 
                alt="Voltar para o Início!" 
                title="Voltar para o Início!"
                className="btnNavTopo"
            />

        </a>

    </div>

);

export default BtnTopo;