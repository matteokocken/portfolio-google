import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LightTitle from './LightTitle';

import { MdMenu } from 'react-icons/md';

import { useLocation } from 'react-router-dom';
import { FaHome, FaEye } from 'react-icons/fa';
import { MdViewDay, MdCreate } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { FcAbout } from 'react-icons/fc';
import { CgProfile } from 'react-icons/cg';

import '../sass/headerPage.sass';

const HeaderPage = () => {
    const { pathname } = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const open = () => {
        setIsOpen(true);
    }
    const close = () => {
        setIsOpen(false);
    }
    
    return (
        <div className={`${isOpen? 'menu menu--open': 'menu'}`}>
            {
                isOpen? (
                    <>
                        <div className="shadow" onClick={close}></div>
                        <div className="content">
                            <h2><LightTitle word='Matteo' /></h2>
                            <ul>
                                <Link to='/'><li><FaHome size={16} />Accueil</li></Link>
                                <Link to='/profil'><li className={pathname ==='/profil'? 'is-active': ''}><CgProfile size={16} />Profil</li></Link>
                                <Link to='/skills'><li className={pathname ==='/skills'? 'is-active': ''}><GiSkills />Compétences</li></Link>
                                <Link to='/realisations'><li className={pathname ==='/realisations'? 'is-active': ''}><MdViewDay />Réalisations</li></Link>
                                <Link to='/creer-portfolio'><li className={pathname ==='/creer-portfolio'? 'is-active': ''}><MdCreate />Je veux créer mon portfolio</li></Link>
                                <Link to='/fonctionnement'><li className={pathname ==='/fonctionnement'? 'is-active': ''}><FaEye />Fonctionnement</li></Link>
                                <Link to='/a-propos'><li className={pathname ==='/a-propos'? 'is-active': ''}><FcAbout />À propos</li></Link>
                            </ul>
                        </div>
                    </>
                ):
                (
                    <button onClick={open}>
                        <MdMenu />
                    </button>
                )
            }
            
        </div>
    );
}

export default HeaderPage;
