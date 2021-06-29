import React from 'react';
import { Link } from 'react-router-dom';

import pp from '../assets/images/pp.png';

import '../sass/apropos.sass';
import HeaderPage from './../components/HeaderPage';

const APropos = () => {

    return (
        <div className='propos'>
            <HeaderPage />
            <div className="header">
                    <h1>À propos</h1>
            </div>
            <div className='profil--propos'>
                <img src={pp} alt="profil"/>
                <div>
                    <p>
                        <span className='letter-blue'>J</span>e suis développeur et intégrateur web situé à Poitiers. <br />
                        <span className='letter-red'>J</span>e m'occupe de la création de site web de A à Z. <br />
                        <span className='letter-yellow'>S</span>i vous souhaitez avoir un site web qui ne ressemble à aucun autre et parfaitement adaptable aux mobiles, tablettes, pc... <br />
                    </p>
                    <Link to='/creer-portfolio'>Cliquez-ici</Link>
                </div>
            </div>
        </div>
    );
}

export default APropos;
