import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/Homepage/Homepage';
import ItemPage from './pages/ItemPage/ItemPage';
import Footer from  './components/Footer/Footer';

import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' render={ () => (<Redirect to ='/tv-shows'/>) }/>
        <Route path='/movies' component={HomePage}/>
        <Route path='/tv-shows' component={HomePage}/>
        <Route path='/:item' component={ItemPage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
