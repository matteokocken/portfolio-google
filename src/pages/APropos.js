import React from 'react';
import { Link } from 'react-router-dom';

import pp from '../assets/images/pp.png';

import '../sass/apropos.sass';
import HeaderPage from './../components/HeaderPage';
import LightTitle from './../components/LightTitle';

const APropos = () => {

    return (
        <div className='propos'>
            <HeaderPage />
            <div>
                <h1><LightTitle word='A propos' /></h1>
                <img src={pp} alt="profil"/>
                <div>
                    <p>
                        <span className='letter-blue'>J</span>e suis développeur et intégrateur web situé à Poitiers. <br />
                        <span className='letter-red'>J</span>e m'occupe de la création de site web de A à Z. <br />
                        <span className='letter-yellow'>S</span>i vous souhaitez avoir un site web qui ne ressemble à aucun autre et parfaitement adaptable aux mobiles, tablettes, pc... <Link to='/creer-portfolio'><span className='letter-red'>C</span>liquez-ici</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default APropos;
