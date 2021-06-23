import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import '../sass/search.sass';
import HeaderSearch from './../components/HeaderSearch';
import SearchItem from './../components/SearchItem';

import searchList from '../data/search-list.json';

const Search = () => {
    const { search } = useParams();
    const [result, setResult] = useState([]);
    
    // Afficher Search item en fonction de { search }
    
    useEffect(() => {
        const readData = () => {
            const text = search;
            const dataFiltered = searchList.filter(r => r.altText.toLowerCase().includes(text));
            setResult(dataFiltered);
        }
        readData();
    }, [search])


    return (
        <>
            <HeaderSearch research={search} />
            <div className="result--nbr">Environ {result.length} résultat{result.length > 1? "s": ""} (0,{Math.floor(Math.random()* 10 + 5)} secondes)</div>
            {
                result.length === 0? <p>Aucun résultat</p>:
                result.map(( { name, link, description }, i ) => 
                    <SearchItem key={i} url={link} title={name} description={description? description: "Aucune description"} />
                )
            }
        </>
    );
}

export default Search;
