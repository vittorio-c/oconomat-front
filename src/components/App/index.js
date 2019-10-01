import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from 'src/components/Home';
import Recipes from 'src/components/Recipes';
import MarketList from 'src/components/MarketList'
import Objectives from 'src/components/Objectives';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import NoFound from 'src/components/Home';
import Contact from 'src/components/Contact';
import Recipe from 'src/components/Recipe';
import Account from 'src/components/Account';




// Styles and assets

import './app.sass'; 


const AppContainer=() => {
    return (

        <Router>
        <div id="app">
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Objectives" component={Objectives} />
          <Route exact path="/Recipes" component={Recipes} />
          <Route exact path="/MarketList" component={MarketList} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Recipe" component={Recipe} /> 
          <Route exact path="/Account" component={Account} />
          <Route component={NoFound} />
          
        </Switch>
        </div>
      </Router>
    )
}

export default AppContainer;

