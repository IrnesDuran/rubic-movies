import React from 'react';

import {connect} from 'react-redux';

export const FormInput =(props) => {
  const {setSearchField,search} = props;

  return(
    <div className='group mx-10 my-6' >
        <input 
            className='outline-none border border-black rounded-md py-1 px-3 focus:border-teal-500 w-full'
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


