import React from 'react';
import { BrowserRouter as Router, Route,Switch,Redirect} from "react-router-dom";
import Home from 'src/components/Home';
import Recipes from 'src/components/Recipes';
import MarketList from 'src/components/MarketList'
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import NoFound from 'src/components/NoFound';
import Contact from 'src/components/Contact';
import ForgottenPassword from 'src/components/ForgottenPassword';
import PasswordSend from 'src/components/PasswordSend';
import Recipe from 'src/components/Recipe';
import HeaderSuper from 'src/components/HeaderSuper';
import Footer from 'src/components/Footer';
import DashBoard from '../DashBoard';
// Styles and assets

import './app.sass'; 



const AppContainer = () => {
  if (sessionStorage.jwtToken === '' || sessionStorage.jwtToken === undefined ){
    return (
      
        <Router>
        <div id="app">
        <HeaderSuper />
            <Switch>
              <Route exact path="/" component={Home} /> 
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/forgottenPassword" component={ForgottenPassword} />
              <Route exact path="/passwordSend" component={PasswordSend} />
              <Route component={NoFound} />
              <Redirect to ="/" />
            </Switch>
        <Footer />
        </div>
      </Router>
    )

    
} else 
return (
      
    <Router>
    <div id="app">
    <HeaderSuper />
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/marketlist" component={MarketList}  />
          <Route exact path="/recipe" component={Recipe} /> 
          <Route component={NoFound} />
        </Switch>
    <Footer />
    </div>
  </Router>
)
}



      
export default AppContainer;
