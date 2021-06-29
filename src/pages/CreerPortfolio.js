import React from 'react';
import HeaderPage from './../components/HeaderPage';
import LightTitle from './../components/LightTitle';
import { BsCaretRightFill } from 'react-icons/bs';
import '../sass/CreerPortfolio.sass';

const CreerPortfolio = () => {
    return (
        <div className='creerPortfolio'>
            <HeaderPage />
            <div className="header">
                <h1>Création de portfolio</h1>
            </div>  
            <div className="create">
                <h2>Créez votre portfolio <LightTitle word='Original' /> </h2>
                <ul>
                    <li><BsCaretRightFill size="16" /> Attirer plus de visiteurs sur votre site</li>
                    <li><BsCaretRightFill size="16" /> Ayez un portfolio unique</li>
                </ul>
                <p>
                    Contactez-moi par email pour plus de renseignements
                </p>
                <div className="button">
                    <a href='mailto:matteokocken@gmail.com'>Envoyer un email</a>
                    <div>ou directement à <span className="mail">matteokocken@gmail.com</span></div>
                </div>
            </div>
        </div>
    );
}

export default CreerPortfolio;
