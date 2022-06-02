import React, { FunctionComponent } from 'react';
import { BiSortAlt2, BiFilter } from "react-icons/bi"

const Filters: FunctionComponent = () => {
    return (
        <div className='filter-sorter'>
            <button className='btn'>Filter <BiFilter /></button>
            <button className='btn'>Sort <BiSortAlt2 /></button>
        </div>
    )
}

export default Filters;