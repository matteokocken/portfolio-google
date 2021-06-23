import React from 'react';
import { Link } from 'react-router-dom';
import LightTitle from './LightTitle';

const HeaderPage = () => {
    return (
        <Link to='/' style={{ position: 'absolute', top: 20, left: 40, fontFamily: 'Product_Sans_Regular', fontSize: 20, textDecoration: 'none' }}>
            <LightTitle word='Matteo' />
        </Link>
    );
}

export default HeaderPage;
