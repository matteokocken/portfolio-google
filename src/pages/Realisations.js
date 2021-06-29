import React from 'react';

import '../sass/realisation.sass';
import img1 from '../assets/images/thebestwo/calendar-view-7.png';
import img2 from '../assets/images/thebestwo/calendar-view-10.png';
import img3 from '../assets/images/thebestwo/Calendar-view1.png';
import img4 from '../assets/images/thebestwo/Calendar-view2.png';
import img5 from '../assets/images/thebestwo/Calendar-view5.png';
import img6 from '../assets/images/thebestwo/Calendar-view6.png';
import img7 from '../assets/images/thebestwo/calendar-view9.png';
import img8 from '../assets/images/thebestwo/Calendar.png';
import img9 from '../assets/images/thebestwo/crop.png';
import img10 from '../assets/images/thebestwo/feed-2.png';
import img11 from '../assets/images/thebestwo/filter-1.png';
import img12 from '../assets/images/thebestwo/profil-9.png';
import img13 from '../assets/images/thebestwo/setting-interest.png';
import img14 from '../assets/images/thebestwo/shop-view-1.png';
import img15 from '../assets/images/thebestwo/stats-card-1.png';
import { Link } from 'react-router-dom';
import HeaderSearch from './../components/HeaderSearch';
import RealImage from './../components/RealImage';

const Realisations = () => {
    const search = "realisations";

    return (
        <div className='realisations'>
            <div>
                <HeaderSearch research={search} />
                <div className='realisations--img'>
                    <RealImage image={img1} text='Agenda'/>
                    <RealImage image={img2} text='Tâches à réaliser'/>
                    <RealImage image={img3} text='Calendrier'/>
                    <RealImage image={img4} text='Agenda journalier'/>
                    <RealImage image={img5} text='Évenements à venir'/>
                    <RealImage image={img6} text='Agenda de la semaine'/>
                    <RealImage image={img7} text='Agenda journalier'/>
                    <RealImage image={img8} text="Calendrier / création d'événement"/>
                    <RealImage image={img9} text='Modifier une photo'/>
                    <RealImage image={img10} text="Page d'actualité"/>
                    <RealImage image={img11} text='Modifier une photo'/>
                    <RealImage image={img12} text='Page de profil'/>
                    <RealImage image={img13} text='Intérêts'/>
                    <RealImage image={img14} text='Présentation de produits'/>
                    <RealImage image={img15} text='Page de paiement'/>
                </div>
                <Link to="/creer-portfolio" className='link-btn'>Je veux un site !</Link>
            </div>
        </div>
    );
}

export default Realisations;
