import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from 'src/components/Home';
import Recipes from 'src/components/Recipes';
import MarketList from 'src/components/MarketList'
import Objectives from 'src/components/Objectives';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import NoFound from 'src/components/NoFound';
import Contact from 'src/components/Contact';
import ContactLogged from 'src/components/ContactLogged';
import Recipe from 'src/components/Recipe';
import Account from 'src/components/Account';
import HeaderSuper from 'src/components/HeaderSuper';
import Footer from 'src/components/Footer';
import TestLog from 'src/components/TestLog';


// Styles and assets

import './app.sass'; 


const AppContainer=() => {
  
    return (
      
        <Router>
        <div id="app">
        <HeaderSuper />
            <Switch>
              <Route exact path="/" component={Home} /> 
              <Route exact path="/test" component={TestLog} /> 
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/Objectives" component={Objectives} />
              <Route exact path="/Recipes" component={Recipes} />
              <Route exact path="/MarketList" component={MarketList} />
              <Route exact path="/SignIn" component={SignIn} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/ContactLogged" component={ContactLogged} />
              <Route exact path="/Recipe" component={Recipe} /> 
              <Route exact path="/Account" component={Account} />
              <Route component={NoFound} />
            </Switch>
        <Footer />
        </div>
      </Router>
    )

    
}

export default AppContainer;

