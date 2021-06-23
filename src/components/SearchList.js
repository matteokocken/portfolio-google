import React from 'react';
import { MdSearch } from "react-icons/md";
import { Link } from 'react-router-dom';


const SearchList = ({displayData}) => {

    return (
        <ul>
            {
                displayData.map((data, i) => 
                    <Link style={{color: 'inherit', textDecoration: 'none'}} key={i} to={`/search/${data.name.toLowerCase()}`}>
                        <li><MdSearch size={20} color={'#9aa0a6'} /><span>{data.name}</span></li>
                    </Link>
                )
            }
        </ul>
    );
}

export default SearchList;
