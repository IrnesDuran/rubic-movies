import React, { useState, useEffect } from 'react';

import './Homepage.styles.scss';
//Redux
import {connect} from 'react-redux';


//Components
import ItemsContainer from '../../components/ItemsContainer/ItemsContainer';
import NavLinks from '../../components/NavLinks/NavLinks';
import FormInput from '../../components/FormInput/FormInput';
import Spinner from '../../components/Spinner/Spinner.tsx';



const ContainerComponent = (props) => {

  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const delimitedSearch = props.search.split(' ').join('%20');
  
useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(props.search.length>2 ? 
    `https://api.themoviedb.org/3/search/${props.category}?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&query=${delimitedSearch}&page=1&include_adult=false&append_to_response=credits`
    :
    `https://api.themoviedb.org/3/${props.category}/top_rated?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&page=1&append_to_response=credits`);
    const dataArray = await res.json();
    const results = await dataArray.results;

     setData(results);
     setIsLoading(false);
  };
  fetchData();
},[props.search,props.category]);


  return (
    <div className="homepage">
      <NavLinks/>
      <FormInput/>
      {isLoading? <Spinner/> :
      <ItemsContainer data={data} searchCategory={props.category}/>}
    </div>
  );
}


const mapStateToProps = state => {
  return{
    category:state.control.category,
    search:state.control.searchField
  };
};

export default connect(mapStateToProps)(ContainerComponent);
