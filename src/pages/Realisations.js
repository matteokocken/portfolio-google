import React from 'react';
import HeaderPage from './../components/HeaderPage';
import LightTitle from './../components/LightTitle';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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

const Realisations = () => {
    return (
        <div className='realisations'>
            <HeaderPage />
            <div>
                <h1><LightTitle word='Réalisations' /></h1>
                <Carousel width='300px'>
                    <div>
                        <img src={img1} alt='example' />
                    </div>
                    <div>
                        <img src={img2} alt='example' />
                    </div>
                    <div>
                        <img src={img3} alt='example' />
                    </div>
                    <div>
                        <img src={img4} alt='example' />
                    </div>
                    <div>
                        <img src={img5} alt='example' />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                    <div>
                        <img src={img6} alt='example' />
                    </div>
                    <div>
                        <img src={img7} alt='example' />
                    </div>
                    <div>
                        <img src={img8} alt='example' />
                    </div>
                    <div>
                        <img src={img9} alt='example' />
                    </div>
                    <div>
                        <img src={img10} alt='example' />
                    </div>
                    <div>
                        <img src={img11} alt='example' />
                    </div>
                    <div>
                        <img src={img12} alt='example' />
                    </div>
                    <div>
                        <img src={img13} alt='example' />
                    </div>
                    <div>
                        <img src={img14} alt='example' />
                    </div>
                    <div>
                        <img src={img15} alt='example' />
                    </div>
                </Carousel>
                <Link to="/creer-portfolio" className='link-btn'>Je veux un site !</Link>

            </div>
        </div>
    );
}

export default Realisations;
