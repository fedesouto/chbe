import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiShoppingCart , FiX} from 'react-icons/fi'

const Navbar:FunctionComponent = () => {
    const [visibility, setVisibility] = useState<boolean>(false);

    return (
        <nav>
            <div className='welcome-bar'>
                <div onClick={() => setVisibility(!visibility)}>{!visibility?<FiMenu />:<FiX />}</div>
                <h1>CHBE</h1>
                <Link to='/cart' onClick={()=> setVisibility(false)}><FiShoppingCart /></Link>
            </div>
            <ul className={!visibility ? 'hide' : undefined}>
                <li className='nav-link'><Link to='/' onClick={()=> setVisibility(false)}>Home</Link></li>
                <li className='nav-link'><Link to='/admin/add' onClick={()=> setVisibility(false)}>Add Products</Link></li>
                <li className='nav-link'><Link to='/user' onClick={()=> setVisibility(false)}>User</Link></li>
            </ul>

        </nav>
    )
}

export default Navbar;