import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeaderPage = () => {
    const [title, setTitle] = useState('Matteo');
    const colorTitle = ['blue', 'red', 'yellow', 'blue', 'green', 'red'];

    useEffect(() => {
        const updateColorTitle = () => {
            let newTitle = [];
            for(let i = 0; i < title.length; i++) {
                newTitle.push(<span key={i} className={`letter-${colorTitle[i]}`}>{title[i]}</span>)
            }
            setTitle(newTitle);
        };
        updateColorTitle();
    }, []);

    return (
        <Link to='/' style={{ position: 'absolute', top: 20, left: 40, fontFamily: 'Product_Sans_Regular', fontSize: 20, textDecoration: 'none' }}>
            {title}
        </Link>
    );
}

export default HeaderPage;
