import { useState, useRef, useEffect } from 'react';

const useHeader = () => {
    const [isAppOpen, setAppOpen] = useState(false);
    const [isProfilOpen, setProfilOpen] = useState(false);

    const refApp = useRef(null);
    const refProfil = useRef(null);

    const clickApp = () => {
        setAppOpen(true);
    }
    const clickAppOut = e => {
        if (refApp.current && !refApp.current.contains(e.target)) {
            setAppOpen(false);
        }
    }

    const clickProfil = () => {
        setProfilOpen(true);
    }
    const clickProfilOut = e => {
        if (refProfil.current && !refProfil.current.contains(e.target)) {
            setProfilOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', clickAppOut, true);
        document.addEventListener('click', clickProfilOut, true);
        return () => {
            document.addEventListener('click', clickAppOut, true);
            document.addEventListener('click', clickProfilOut, true);
        }
    });

    return { isAppOpen, isProfilOpen, refApp, refProfil, clickApp, clickProfil }
}

export default useHeader;
