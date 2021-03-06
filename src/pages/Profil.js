import React from 'react';
import HeaderPage from './../components/HeaderPage';
import pp from '../assets/images/pp.png';

import '../sass/profil.sass';
import { Link } from 'react-router-dom';

const Profil = () => {
    return (
        <div className='profil'>
            <HeaderPage />
            <div>
                <div className="header">
                    <h1>Mattéo KOCKEN</h1>
                </div>
                <div className="info">
                    <img src={pp} alt="profil"/>
                    <p>
                    Ayant plusieurs années d'expérience dans le développement web, mon objectif est de mettre mes compétences à votre service. Passer par mes services, c'est s'assurer d'un résultat de qualité et des délais rapides.
                    </p>
                    <Link to="/realisations">Découvrir mes réalisations</Link>
                </div>
            </div>

        </div>
    );
}

export default Profil;
