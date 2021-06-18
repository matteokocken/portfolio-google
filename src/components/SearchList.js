import React from 'react';
import { MdSearch } from "react-icons/md";
import { Link } from 'react-router-dom';


const SearchList = ({displayData}) => {

    return (
        <ul>
            {
                displayData.map((data, i) => 
                    data.linkExt? 
                        <a style={{color: 'inherit', textDecoration: 'none'}} key={i} target="_blank" rel="noreferrer" href={data.link}>
                            <li><MdSearch size={20} color={'#9aa0a6'} /><span>{data.name}</span></li>
                        </a>
                        : 
                        <Link style={{color: 'inherit', textDecoration: 'none'}} key={i} to={data.link}>
                            <li><MdSearch size={20} color={'#9aa0a6'} /><span>{data.name}</span></li>
                        </Link>
                    
                )
            }
        </ul>
    );
}

export default SearchList;
