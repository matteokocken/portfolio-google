import React from 'react';

import '../sass/footer.sass';

import { FaMapMarkerAlt } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <div className="footer--localisation"><FaMapMarkerAlt className='footer--icon'/>Poitiers (86), FRANCE</div>
            <div className="footer--nav">
                <a href="/a-propos">À propos</a>
                <a href="/fonctionnement">Comment fonctionne cette page ?</a>
                <a href="/mentions-legales">Mentions légales</a>
                <a href="/creer-portfolio">Je veux créer mon portfolio</a>
            </div>
        </footer>
    );
}

export default Footer;
