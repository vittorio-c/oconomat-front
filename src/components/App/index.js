import React from 'react';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";
import Home from 'src/components/Home';
import Recipes from 'src/components/Recipes';
import MarketList from 'src/components/MarketList'
import Objectives from 'src/components/Objectives';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import NoFound from 'src/components/NoFound';
import Contact from 'src/components/Contact';
import Recipe from 'src/components/Recipe';
import Account from 'src/components/Account';




// Styles and assets

import './app.sass'; 



const AppContainer=() =>{
    return (

        
        <Router>
        <div id="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Account" component={Account} />
          <Route path="/Objectives" component={Objectives} />
          <Route path="/Recipes" component={Recipes} />
          <Route path="/MarketList" component={MarketList} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Recipe" component={Recipe} /> 
          <Route component={NoFound} />
          
        </Switch>
        </div>
      </Router>
    )
}

export default AppContainer;

