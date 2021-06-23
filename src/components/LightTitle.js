import React, { useState, useEffect } from 'react';

const LightTitle = ({ word }) => {
    const [title, setTitle] = useState();
    
    const t = word

    useEffect(() => {
        const updateTitle = () => {
            const newArray = [];
            const colorTitle = ['blue', 'red', 'yellow', 'blue', 'green', 'red', 'yellow', 'green', 'red', 'blue', 'green', 'yellow'];
            let index = 0;
            for(let i = 0; i < t.length; i++) {
                if(t[i] === ' '){
                    index++;
                };
                const newValue = <span key={i} className={`letter-${colorTitle[i - index]}`}>{t[i]}</span>
                newArray.push(newValue);
            }
            setTitle(newArray);
        };
        updateTitle();
    }, [t]);


    return (
        <span style={{display: 'inline-block'}}>{title}</span>
    );
}

export default LightTitle;
