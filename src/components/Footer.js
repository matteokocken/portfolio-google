import React from 'react';

import '../sass/footer.sass';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="footer--localisation"><FaMapMarkerAlt className='footer--icon'/>Poitiers (86), FRANCE</div>
            <div className="footer--nav">
                <Link to="/a-propos">À propos</Link>
                <Link to="/fonctionnement">Comment fonctionne cette page ?</Link>
                <Link to="/mentions-legales">Mentions légales</Link>
                <Link to="/creer-portfolio">Je veux créer mon portfolio</Link>
            </div>
        </footer>
    );
}

export default Footer;
