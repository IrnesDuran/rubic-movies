import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.styles.scss';

import {ReactComponent as Logo} from './logo.svg';

const Navbar = () => {
    return(
        <div className="navbar">
            <Link className = 'logo-container' to='/'>
                <Logo className="rub-logo"/>
            </Link>
        </div>

    )};

export default Navbar;

