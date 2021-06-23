import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome, FaLinkedin,FaEye } from 'react-icons/fa';
import { MdViewDay, MdCreate } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { FcAbout } from 'react-icons/fc';
import { CgProfile } from 'react-icons/cg';

const OpenApps = ({ refApp, clickApp }) => {
    return (
        <div ref={refApp} className="header--apps" onClick={clickApp} >
            <Link to='/' className="header--apps__app"><FaHome size={74} /><span>Accueil</span></Link>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/matteo-kocken-2b098a121/' className="header--apps__app"><FaLinkedin size={74} /><span>Linkedin</span></a>
            <Link to='/realisations' className="header--apps__app"><MdViewDay size={74} /><span>Réalisations</span></Link>
            <Link to='/fonctionnement' className="header--apps__app"><FaEye size={74} /><span>Tutoriel</span></Link>
            <Link to='/creer-portfolio' className="header--apps__app"><MdCreate size={74} /><span>Création</span></Link>
            <Link to='/skills' className="header--apps__app"><GiSkills size={74} /><span>Compétences</span></Link>
            <Link to='/a-propos' className="header--apps__app"><FcAbout size={74} /><span>À propos</span></Link>
            <Link to='/profil' className="header--apps__app"><CgProfile size={74} /><span>Profil</span></Link>

        </div>
    );
}

export default OpenApps;
