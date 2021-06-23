import React from 'react';
import { GrReactjs } from "react-icons/gr";


const OpenProfil = ({ refProfil, clickProfil }) => {
    return (
        <div ref={refProfil} className="header--profil" onClick={clickProfil}>
            <div className="profil--image">M</div>
            <div className="profil--name">Mattéo Kocken</div>
            <div className="profil--info">Développeur React.JS <GrReactjs /></div>
            <div className="profil--email">matteokocken@gmail.com</div>
            <a style={{textAlign: 'center'}} href='mailto:matteokocken@gmail.com' className="profil--btn">Me Contacter</a>
            <div className="profil--localisation">Poitiers (86), France</div>
        </div>
    );
}

export default OpenProfil;
