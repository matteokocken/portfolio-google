import React, { useEffect, useState, useRef } from 'react';
import '../sass/Form.sass';
import { MdSearch, MdMic } from "react-icons/md";
import useForm from './../hooks/useForm';
import SearchList from './SearchList';


const Form = () => {
    const [title, setTitle] = useState('Matteo');
    const [colorTitle, setColorTitle] = useState(['blue', 'red', 'yellow', 'blue', 'green', 'red']);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const refSearch = useRef(null);

    const { inputActive, refInput, inputIn, updateInput, displayData } = useForm(null);

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (refSearch.current && !refSearch.current.contains(e.target)) {
                setIsSearchOpen(false);
            }
        }, true);
    });

    useEffect(() => {
        let newTitle = [];
        for(let i = 0; i < title.length; i++) {
            newTitle.push(<span key={i} className={`letter-${colorTitle[i]}`}>{title[i]}</span>)
        }
        setTitle(newTitle);
    }, []);

    return (
        <div className='formulaire'>
            <h1>{title}</h1>
            <form className='search'>
                <div className={`search--container ${inputActive?'isActive': 'noActive'}`} ref={refInput}>
                    <div className="search--container--input">
                        <label htmlFor="search-bar" className="search--container--label"><MdSearch size={20} color={'#9aa0a6'} /></label>
                        <input onChange={updateInput} onClick={inputIn} type="search" id="search-bar" className="search--container--input2" />
                        <button className="search--container--vocal"><MdMic size={24} color='#4285f4' /></button>
                    </div>

                    { inputActive && 
                    <div className="search--container--result">
                       <div>
                            <SearchList displayData={displayData} />
                            <div className="search--button">
                                <button className="search--button--research">Recherche</button>
                                <button className="search--button--lucky">J'ai de la chance</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <div className="search--button">
                    <button className="search--button--research">Recherche</button>
                    <button className="search--button--lucky">J'ai de la chance</button>
                </div>
                <div className="search--text">
                    Portfolio disponible en : <a target='_blank' rel="noreferrer" href="http://matteokocken.fr">Version classique</a>
                </div>
            </form>
        </div>
    );
}

export default Form;
