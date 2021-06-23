import React, { useState, useEffect } from 'react';

const LightTitle = ({ word }) => {
    const [title, setTitle] = useState(word);
    const colorTitle = ['blue', 'red', 'yellow', 'blue', 'green', 'red', 'yellow', 'green', 'red', 'blue', 'green', 'yellow'];
    
    useEffect(() => {
        let newTitle = [];
        let index = 0;
        for(let i = 0; i < title.length; i++) {
            if(title[i] === ' '){
                index++;
            };
            newTitle.push(<span key={i} className={`letter-${colorTitle[i - index]}`}>{title[i]}</span>)
        }
        setTitle(newTitle);
    }, []);
    return (
        <span style={{display: 'inline-block'}}>{title}</span>
    );
}

export default LightTitle;
