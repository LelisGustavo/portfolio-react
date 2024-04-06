import React from "react";
import GitHubBanner from '../images/icones/icons-github-250.svg';
import LinkedInBanner from '../images/icones/icons-linkedin-250.svg';
import ImagemBanner from '../images/imgBanner.png';


const BannerPage = () => (

    // Banner
    <section className="bannerPage">

        <div className="wrap colum1">

            <div className="titleBanner">

                <h1 className="textBanner">
                    <span className="nome">Gustavo Lélis Rocha<span className="iconeAt">!</span></span>
                    <span className="funcao">Desenvolvedor Web FullStack.</span>
                    <span className="descricao">Este é meu Portfólio, conheça um pouco mais sobre mim!</span>
                </h1>

                <div className="btnPortfolio">

                    <a href="#" target="_blank" className="linkGitHub" title="GitHub">

                        <img 
                            src={GitHubBanner}
                            alt="GitHub" 
                            title="GitHub" 
                            className="GitHub"
                        />
                            GitHub

                    </a>

                    <a href="#" target="_blank" className="linkLinkedin" title="Linkedin">

                        <img 
                            src={LinkedInBanner} 
                            alt="Linkedin" 
                            title="Linkedin"
                            className="Linkedin"
                        /> 
                        LinkedIn

                    </a>

                </div>

            </div>

            <div className="boxImgBanner">

                <img 
                    src={ImagemBanner} 
                    alt="Imagem para Apresentação" 
                    title="Imagem para Apresentação"
                    className="imgBanner"
                />

            </div>

        </div>

    </section>

);

export default BannerPage;