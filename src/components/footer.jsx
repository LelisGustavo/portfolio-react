import React from "react";
import LogoTipoFooter from '../images/Shark02.jpg';
import LinkedIn from '../images/icones/iconsLinkedin.png';
import GitHub from '../images/icones/iconsGithub.png';
import YouTube from '../images/icones/iconsYoutube.png';
import Facebook from '../images/icones/iconsFacebook.png';
import Instagram from '../images/icones/iconsInstagram.png';
import Behance from '../images/icones/iconsBehance.png';

const FooterPage = () => (

    // Rodapé
        <footer className="endPage">

            <section className="rsFooter">

                <div className="wrap">

                    <h1>Redes Sociais!</h1>
                    <div className="iconRs">

                        <a href="#" target="_blank" className="linkRs">

                            <img 
                                src={LinkedIn} 
                                alt="LinkedIn" 
                                title="LinkedIn" 
                                className="iconImg"
                            />

                        </a>

                        <a href="#" target="_blank" className="linkRs">

                            <img 
                                src={GitHub} 
                                alt="GitHub" 
                                title="GitHub" 
                                className="iconImg"
                            />

                        </a>

                        <a href="#" target="_blank" className="linkRs">

                            <img 
                                src={YouTube} 
                                alt="YouTube" 
                                title="YouTube" 
                                className="iconImg"
                            />

                        </a>

                        <a href="#" target="_blank" className="linkRs">

                            <img 
                                src={Facebook} 
                                alt="Facebook" 
                                title="Facebook" 
                                className="iconImg"
                            />

                        </a>

                        <a href="#" target="_blank" className="linkRs">

                            <img 
                                src={Instagram} 
                                alt="Instagram" 
                                title="Instagram"
                                className="iconImg"
                            />

                        </a>

                        <a href="#" target="_blank" className="linkRs">

                            <img 
                                src={Behance}
                                alt="Behance" 
                                title="Behance" 
                                className="iconImg"
                            />

                        </a>

                    </div>

                </div>

            </section>

            <section className="copy">

                <div className="wrap">

                    <div className="infoCopy">

                        <p>Todos os direitos reservados © 2024.</p>
                        
                        <a href="#top">

                        <img 
                            src={LogoTipoFooter} 
                            alt="LogoTipo Dev LeliShark" 
                            title="LogoTipo Dev LeliShark"
                            className="logoTipoCopy"
                        />

                        </a>

                    </div>

                </div>

            </section>

        </footer>

);

export default FooterPage;