import React, { useEffect, useState } from 'react';
import '../sass/Form.sass';
import { MdSearch, MdMic } from "react-icons/md";
import useForm from './../hooks/useForm';
import SearchList from './SearchList';


const Form = () => {
    const t = "Matteo KOCKEN"
    const [title, setTitle] = useState();
    const [colorTitle, setColorTitle] = useState([]);

    const { inputActive, refInput, inputIn, updateInput, displayData, search } = useForm(null);

    useEffect(() => {
        setColorTitle(['blue', 'red', 'green', 'blue', 'yellow', 'red','blue', 'red', 'yellow', 'blue', 'green', 'red', 'green',]);
    }, []);
    useEffect(() => {
        let newTitle = [];
        for(let i = 0; i < t.length; i++) {
            newTitle.push(<span key={i} className={`letter-${colorTitle[i]}`}>{t[i]}</span>)
        }
        setTitle(newTitle);
    }, [colorTitle]);

    return (
        <div className='formulaire'>
            <h1 className='site--title'>{title}</h1>
            <form className='search' onSubmit={search} >
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
                                <button onClick={search} className="search--button--research">Recherche</button>
                                <button className="search--button--lucky">J'ai de la chance</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <div className="search--button">
                    <button onClick={search} className="search--button--research">Recherche</button>
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
