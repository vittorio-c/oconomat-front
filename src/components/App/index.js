/**
 * Import
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link,Redirect} from "react-router-dom";

import { connect } from 'react-redux';

/**
 * Local import
 */
// Composants enfants éventuels
import ClicCounter from 'src/components/ClicCounter';

// Styles et assets
import './app.sass'; 

import Form from  '../Form/index.js';
import MaPageObjectifs from '../Objectifs/index.js';

/**
 * Code
 */
const App = () =>  {
  const maClasse='yes'
  if(maClasse=='no'){
  return( <div id="app"> 
      
    <div> 
      <Link to="/form">
      <button className='none'> redirect to form </button> 
      </Link> 
        <ul>
          <li>
          <Link className="none" to= "/">Accueil</Link>
          </li>
          <li>
          <Link className="none" to= "/contact">Contact</Link>
          </li>
          <li> 
          <Link className="none" to= "/recipe">Recettes</Link>
          </li>
        </ul>  
       
      <Route exact path ="/" component={Accueil}/> 
      <Route  path ="/contact" component={Contact}/> 
      <Route path ="/recipe" component={Recipe}/>  
      <Route path="/form" component={Form}/> 
      <Route path="/objectifs" component={MaPageObjectifs}/>
      
      
      </div>
     
    
    
  </div>)
} 
else{
  return( <div id="app"> 
    <Router> 
      
    <div> 
      <Link to="/form">
      <button> redirect to form </button> 
      </Link> 
        <ul>
          <li>
          <Link to= "/">Accueil</Link>
          </li>
          <li>
          <Link to= "/contact">Contact</Link>
          </li>
          <li> 
          <Link to= "/recipe">Recettes</Link>
          </li>
        </ul>  
       
      <Route exact path ="/" component={Accueil}/> 
      <Route  path ="/contact" component={Contact}/> 
      <Route path ="/recipe" component={Recipe}/>  
      <Route path="/form" component={Form}/> 
      <Route path="/objectifs" component={MaPageObjectifs}/>
      
      </div>
     
    
    </Router>
  </div>)
 } 
};


const Accueil=() =>{
  return (<h2> Voici ma page accueil</h2> )
} 

const Contact=() =>{
  return (<h2> Voici ma page de contact </h2> )
} 

const Recipe=() =>{
  return (<h2> Voici ma page de recettes </h2>)  
}





/**
 * Export
 */

// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      greeting: state.greetingMessage
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
      handleChange: (event) => {
        const action = { type: 'UPDATE_INPUT_VALUE', value: event.target.value };
        dispatch(action);
      }
    };
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const AppContainer = connectionStrategies(App);

// Étape 3 : on exporte le composant connecté qui a été généré
export default AppContainer;
