import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoApps } from "react-icons/io5";
import HomeContext from './../contexts/HomeContext';
import '../sass/header.sass';

import OpenApps from './OpenApps';
import OpenProfil from './OpenProfil';

const Header = () => {
    const { isAppOpen, isProfilOpen, refApp, refProfil, clickApp, clickProfil } = useContext(HomeContext);

    return (
        <header>
            <div>
                <div className="header--link">
                    <Link to={{ pathname: "https://www.linkedin.com/in/matteo-kocken-2b098a121/" }} target="_blank">Linkedin</Link>
                    <Link to="/realisations">Réalisations</Link>
                </div>
                <div className="header--btn">
                    <button onClick={clickApp} className='header--btn__app'><IoApps size={19.7} /></button>
                    <button onClick={clickProfil} className='header--btn__img'><div className="profil--image">M</div></button>
                </div>
            </div>
            { isAppOpen && <OpenApps refApp={refApp} clickApp={clickApp} /> }
            { isProfilOpen && <OpenProfil refProfil={refProfil} clickProfil={clickProfil} /> }
        </header>
    );
}

export default Header;
