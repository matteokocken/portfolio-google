import React, { useRef, useState, useEffect } from 'react';

const RealImage = ({image, text}) => {
    const [open, setOpen] = useState(false);
    const refImg = useRef(null);
    const openImage = () => {
        setOpen(true)
    }

    useEffect(() => {
        const handleClick = (event) => {
            if (refImg.current && refImg.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [refImg]);
    return (
        <div className={`${open? 'isOpen': ''}`} ref={refImg}>
            <img onClick={openImage} src={image} alt='example' />
            <p onClick={openImage}>{ text }</p>
        </div>
    );
}

export default RealImage;
