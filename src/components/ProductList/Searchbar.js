import React from 'react';
import { FiSearch } from "react-icons/fi"

const Searchbar = () => {
    return(
        <div className='search-bar'>
            <input type="text" placeholder="Search" />
            <span><FiSearch /></span>
        </div>
    )
}
export default Searchbar;