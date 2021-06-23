import React from 'react';

import '../sass/searchItem.sass';

const SearchItem = (props) => {

    const { url, title, description } = props;

    return (
        <div className='search--item'>
            <a href={ url } className="item--url">{ url }</a>
            <a href={ url } className="item--title">{ title }</a>
            <div className="item--description">{ description }</div>
        </div>
    );
}

export default SearchItem;
