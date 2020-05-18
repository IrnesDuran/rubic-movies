import React from 'react';

import {ReactComponent as RubLogo} from './logo.svg';

import './Logo.styles.scss';

const Logo = () => {
    return(
        <button className="h-12 m-4"> 
        <RubLogo className="h-full"/>      
        </button>
    )};

export default Logo;
