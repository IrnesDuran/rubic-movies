import React from 'react';
import './FormInput.styles.scss';

import {connect} from 'react-redux';

export const FormInput =(props) => {
  const {setSearchField,search} = props;

  return(
    <div className='input-container' >
        <input 
            className='input-field'
            onChange={setSearchField}
            name="search" 
            type='search'
            value={search}
            placeholder="Search results on www.themoviedb.org"/>   
    </div>
)};  

const mapStateToProps = state => {
  return{
    search:state.control.searchField
  };
};

const mapDispatchToProps =  dispatch => {
  return{
      setSearchField: e =>{
          dispatch({type:'SET_SEARCHFIELD', text: e.target.value});
      },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FormInput);


