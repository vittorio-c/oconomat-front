import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";






// Styles and assets

import './app.sass'; 
import Header from '../Header/index.js';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Recipes from 'src/components/Recipes';
import MarketList from 'src/components/MarketList'
import Objectives from 'src/components/Objectives';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';


const AppContainer=() =>{
    return (

        
        <Router>
        <div id="app">

          <Route exact path="/" component={Home} />
          <Route path="/Objectives" component={Objectives} />
          <Route path="/Recipes" component={Recipes} />
          <Route path="/MarketList" component={MarketList} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />

        </div>
      </Router>
    )
}

export default AppContainer;

