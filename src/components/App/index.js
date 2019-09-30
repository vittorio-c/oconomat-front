import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";


=======
import HeaderBackToHomePage from '../HeaderBackToHomePage/index.js';
import Recipe from '../Recipe/index.js';
import Footer from '../Footer/index.js';
>>>>>>> 86641baeba52f7ad30ade1ec8fd06b1945992523




// Styles and assets

import './app.sass'; 
<<<<<<< HEAD
import Home from 'src/components/Home';
import Recipes from 'src/components/Recipes';
import MarketList from 'src/components/MarketList'
import Objectives from 'src/components/Objectives';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import NoFound from 'src/components/NoFound';


const AppContainer=() =>{
    return (

        
        <Router>
        <div id="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Objectives" component={Objectives} />
          <Route path="/Recipes" component={Recipes} />
          <Route path="/MarketList" component={MarketList} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route component={NoFound} />
          
        </Switch>
        </div>
      </Router>
    )
=======







const AppContainer=() =>{
    return (<div id="app"> <HeaderBackToHomePage/> <Recipe/>
    <Footer/> </div>)
>>>>>>> 86641baeba52f7ad30ade1ec8fd06b1945992523
}

export default AppContainer;

