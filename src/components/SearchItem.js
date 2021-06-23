import React from 'react';

import '../sass/searchItem.sass';
import { Link } from 'react-router-dom';

const SearchItem = (props) => {

    const { url, title, description, linkExt } = props;

    return (
        <div className='search--item'>
            {
                linkExt? (
                    <div>
                        <a href={ url } className="item--url">{ url }</a>
                        <a href={ url } className="item--title">{ title }</a>
                    </div>
                ) :(
                    <div>
                        <Link to={ url } className="item--url">{ url }</Link>
                        <Link to={ url } className="item--title">{ title }</Link>
                    </div>
                )
            }
            <div className="item--description">{ description }</div>
        </div>
    );
}

export default SearchItem;
