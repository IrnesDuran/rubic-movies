import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.styles.scss';

import Logo from '../Logo/Logo';

const Navbar = () => {
    return(
        <div className="navbar">
            <Link className = 'logo-container' to='/'>
                <Logo/>
            </Link>
        </div>

    )};

export default Navbar;

