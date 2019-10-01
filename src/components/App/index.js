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


const AppContainer=() => {
    return (

        <Router>
        <div id="app">
        <Switch>
          <Route path="http://ec2-3-86-6-98.compute-1.amazonaws.com/projet-Oconomat-front/dist/" component={Home} /> 
          <Route exact path="projet-Oconomat-front/contact" component={Contact} />
          <Route exact path="projet-Oconomat-front/Objectives" component={Objectives} />
          <Route exact path="projet-Oconomat-front/Recipes" component={Recipes} />
          <Route exact path="projet-Oconomat-front/MarketList" component={MarketList} />
          <Route exact path="projet-Oconomat-front/SignIn" component={SignIn} />
          <Route exact path="projet-Oconomat-front/SignUp" component={SignUp} />
          <Route exact path="projet-Oconomat-front/Contact" component={Contact} />
          <Route exact path="projet-Oconomat-front/Recipe" component={Recipe} /> 
          <Route exact path="projet-Oconomat-front/Account" component={Account} />
          <Route component={NoFound} />
          
        </Switch>
        </div>
      </Router>
    )
}

export default AppContainer;

