import React from 'react'
import './SignIn.sass'

import Header from '../HeaderVisitor';
import Footer from 'src/components/Footer'; 
import {connect} from 'react-redux';
import Objectives from 'src/components/Objectives';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";
import Account from 'src/components/Account';
import HeaderVisitor from '../HeaderVisitor';


const ConnexionStatic =({testSubmit}) => {

    return(
      <div>
          <header>
              <HeaderVisitor/>
          </header>
          <main>
              <div className ='food-background mt-3'>
                  <form className="d-flex flex-column" onSubmit={testSubmit}>
                      
                      <div className="formBlock">
                      <h2 className="connection-title">Connexion</h2>
                      <div className="form-group mt-4">
                          <input type="email" className="form-control rounded-left rounded-right" name="email" placeholder="Your mail here"/>             
                      </div> 
                      <div className="form-group">
                          <input type="password" className="form-control rounded-left rounded-right" name="password" placeholder="Your password here"/>
                      </div> 

                      <button className="validation btn" type="submit">Envoyer</button>
                      </div>
              


                  </form> 
              </div>
          </main>
          <footer>
              <Footer />
          </footer>
        </div>
  )
} 


const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => { 
      
      return {
        letters: state.letters,
        storedValues: state.storedValues
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
       testSubmit:(event) =>{
           event.preventDefault(); 
           ownProps.history.push('/Account');
                 
       },
      };
    },
  );
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const Connexion = connectionStrategies(ConnexionStatic);
  
  // Étape 3 : on exporte le composant connecté qui a été généré
  export default Connexion;



       
    
    
    