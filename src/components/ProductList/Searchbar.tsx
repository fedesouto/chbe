import React, { FunctionComponent } from 'react';
import { FiSearch } from "react-icons/fi"

const Searchbar: FunctionComponent = () => {
    return(
        <div className='search-bar'>
            <input type="text" placeholder="Search" />
            <span><FiSearch /></span>
        </div>
    )
}
export default Searchbar;