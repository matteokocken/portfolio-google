import React, { useState, useEffect, useContext } from 'react';
import { MdSearch } from "react-icons/md";
import { IoApps } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import '../sass/header.sass'

import HomeContext from './../contexts/HomeContext';
import OpenApps from './OpenApps';
import OpenProfil from './OpenProfil';
import { Link } from 'react-router-dom';
const HeaderSearch = ( { research } ) => {

    const { search } = useParams();

    const { isAppOpen, isProfilOpen, refApp, refProfil, clickApp, clickProfil } = useContext(HomeContext);

    const [title, setTitle] = useState('Matteo');
    const colorTitle = ['blue', 'red', 'yellow', 'blue', 'green', 'red'];

    useEffect(() => {
        let newTitle = [];
        for(let i = 0; i < title.length; i++) {
            newTitle.push(<span key={i} className={`letter-${colorTitle[i]}`}>{title[i]}</span>)
        }
        setTitle(newTitle);
    }, []);

    return (
        <>
            <div className='header--search--title'>
                <Link to="/" className="header--title">{title}</Link>
                <div className="header--input" style={{ maxWidth: 692}}>
                    <div className="text">{ research }</div>
                    <MdSearch size={24} color={'#4285f4'} />
                </div>
                <div className="header--btn">
                    <button onClick={clickApp} className='header--btn__app'><IoApps size={19.7} /></button>
                    <button onClick={clickProfil} className='header--btn__img'><div className="profil--image">M</div></button>
                </div>
                { isAppOpen && <OpenApps refApp={refApp} clickApp={clickApp} /> }
                { isProfilOpen && <OpenProfil refProfil={refProfil} clickProfil={clickProfil} /> }
            </div>
            <div className="nav-bar">
                <Link to="/search/profil" className={(search === "profil")? "isActiveLink" :""}>Profil</Link>
                <Link to="/search/a propos" className={(search === "a propos")? "isActiveLink": ""}>À propos</Link>
                <Link to="/search/compétences" className={(search === "compétences")? "isActiveLink": ""}>Compétences</Link>
                <Link to="/search/réalisations" className={(search === "réalisations")? "isActiveLink": ""}>Réalisations</Link>
                <Link to="/search/création portfolio" className={(search === "création portfolio")? "isActiveLink": ""}>Je veux mon portfolio</Link>
                <Link to="/search/plus">Autre</Link>
            </div>
        </>
    );
}

export default HeaderSearch;
