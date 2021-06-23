import React from 'react';
import HeaderPage from './../components/HeaderPage';
import LightTitle from './../components/LightTitle';

import '../sass/CreerPortfolio.sass';

const CreerPortfolio = () => {
    return (
        <div className='creerPortfolio'>
            <HeaderPage />
            <div className="create">
                <h1><LightTitle word='Création' /> portfolio</h1>
                <h2>Créez votre portfolio <LightTitle word='Original' /> </h2>
                <ul>
                    <li><LightTitle word='Attirer' /> plus de visiteur sur votre site</li>
                    <li><LightTitle word='Avoir' /> un portfolio unique</li>
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
