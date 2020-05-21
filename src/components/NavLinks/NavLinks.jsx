import React from 'react';
import './NavLinks.styles.scss';
import { connect } from 'react-redux';

import {Link} from 'react-router-dom';



//Actions
import {setToMovie, setToTv} from '../../store/actions';

const NavbarLinks = (props) => {

    let activeLink = props.category==='movie'? 'movie':'tv';


    return(
        <nav>
            <Link className='nav-link' 
                onClick={props.setToMovie}
                to='/movies'>Movies</Link>
            <Link className='nav-link' 
                onClick={props.setToTv}
                to='/tv-shows'>TV Shows</Link>
            <div class={`animation start-${activeLink}`}></div>
            {/* <a href="#" 
                onClick={props.setToMovie}>Movies</a>
            <a href="#" 
                onClick={props.setToTv}>TV Shows</a>
            <div class={`animation start-${activeLink}`}></div> */}
        </nav>
    )};

const mapStateToProps = state => {
    return{
        category:state.control.category
    };
};

const mapDispatchToProps =  dispatch => {
    return{
    setToMovie: () => dispatch(setToMovie()),
    setToTv: () => dispatch(setToTv()),
    };
};
    

export default connect(mapStateToProps,mapDispatchToProps)(NavbarLinks);

