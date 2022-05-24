import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
    const [visibility, setVisibility] = useState(false);

    return (
        <nav>
            <div className='welcome-bar'>
                <div onClick={() => setVisibility(!visibility)}><FiMenu /></div>
                <h1>CHBE</h1>
                <Link to='/'><FiShoppingCart /></Link>
            </div>
            <ul className={!visibility && 'hide'}>
                <li className='nav-link'><Link to='/'>Home</Link></li>
                <li className='nav-link'><Link to='/'>Categories</Link></li>
                <li className='nav-link'><Link to='/'>User</Link></li>
            </ul>

        </nav>
    )
}

export default Navbar;