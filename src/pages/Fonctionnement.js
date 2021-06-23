import React from 'react';
import HeaderPage from './../components/HeaderPage';
import LightTitle from './../components/LightTitle';
import { Link } from 'react-router-dom';

import '../sass/Fonctionnement.sass';

const Fonctionnement = () => {
    return (
        <div className='fonctionnement'>
            <HeaderPage />
            <h1 style={{fontSize: 40}}><LightTitle word='Comment' /> fonctionne cette page ?</h1>
            <div>
                <div>1. Rendez-vous sur la <Link to='/'>page d'accueil</Link></div>
                <div>2. Cliquez sur la barre de recherche.</div>
                <div>3. Cliquez sur un lien ou tapez votre recherche</div>
            </div>
        </div>
    );
}

export default Fonctionnement;
