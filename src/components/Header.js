import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoApps } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import HomeContext from './../contexts/HomeContext';
import '../sass/header.sass';

import img from '../assets/images/react.png';

const Header = () => {
    const { isAppOpen, isProfilOpen, refApp, refProfil, clickApp, clickProfil } = useContext(HomeContext);

    return (
        <header>
            <div>
                <div className="header--link">
                    <Link to={{ pathname: "https://www.linkedin.com/in/matteo-kocken-2b098a121/" }} target="_blank">Linkedin</Link>
                    <Link to="/realisation">Réalisations</Link>
                </div>
                <div className="header--btn">
                    <button onClick={clickApp} className='header--btn__app'><IoApps size={19.7} /></button>
                    <button onClick={clickProfil} className='header--btn__img'><div className="profil--image">M</div></button>
                </div>
            </div>
            {
                isAppOpen && (
                    <div ref={refApp} className="header--apps" onClick={() => setTimeout(clickApp, 1)} >
                        <div className="header--apps__app"><img src={img} alt="Card" /><span>Gmail</span></div>
                        <div className="header--apps__app"><img src={img} alt="Card" />Maps</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />Traduction</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />Recherche</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                        <div className="header--apps__app"><img src={img} alt="Card" />GOOGLE</div>
                    </div>
                )
            }
            {
                isProfilOpen && (
                    <div ref={refProfil} className="header--profil" onClick={() => setTimeout(clickProfil, 1)}>
                        <div className="profil--image">M</div>
                        <div className="profil--name">Mattéo Kocken</div>
                        <div className="profil--info">Développeur React.JS <GrReactjs /></div>
                        <div className="profil--email">matteokocken@gmail.com</div>
                        <button className="profil--btn">Me Contacter</button>
                        <div className="profil--localisation">Poitiers (86), France</div>
                    </div>
                )
            }
            
        </header>
    );
}

export default Header;
