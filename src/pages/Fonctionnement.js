import React from 'react';
import HeaderPage from './../components/HeaderPage';
import { Link } from 'react-router-dom';

import '../sass/Fonctionnement.sass';

const Fonctionnement = () => {
    return (
        <div className='fonctionnement'>
            <HeaderPage />
            <div className="header">
                <h1>Découvrez comment utiliser ce site</h1>
            </div>
            <div className='tuto'>
                <div>1. Rendez-vous sur la <Link to='/'>page d'accueil</Link></div>
                <div>2. Cliquez sur la barre de recherche.</div>
                <div>3. Cliquez sur un lien ou tapez votre recherche</div>
            </div>
        </div>
    );
}

export default Fonctionnement;
