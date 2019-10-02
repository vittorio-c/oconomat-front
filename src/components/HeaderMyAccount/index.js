import React from 'react';
import './HeaderMyAccount.sass'; 
import {connect} from 'react-redux';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const HeaderMyAccountStatic =({getRecipes}) =>{
    return  <div className="Header">
        <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="/Account"><img src="src/ressources/pictures/logoOconomat.png" className="img-fluid" alt="Responsive image"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/Objectives"><a className="nav-link">Mes objectifs</a> </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Recipes"> <a className="nav-link"  onClick={getRecipes}>Mes recettes</a> </Link> 
                    </li>
                    <li className="nav-item">
                       <Link to="/MarketList"> <a className="nav-link">Ma liste de course</a> </Link>
                    </li>
                    <li className="nav-item">
                       <Link to="/"> <a className="nav-link">Deconnexion</a> </Link> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/ContactLogged">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>         
} 

/* informations from Bootstrap's documentation 
https://getbootstrap.com/docs/4.3/components/buttons/ 


*/

const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => { 
      console.log(state.recipes)
      //console.log(state.recipes);
      return {
        recipes:state.recipes
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
       
        getRecipes:() => { 
         console.log('recipes fetched')
          const url ='http://api.oconomat.fr/api/menu/2'
          axios.get(url).then((response)=>{ 
          var recipes=response.data.recipes
          const action={type:'Show-Recipes',value:recipes} 
          dispatch(action);
          
  
          })
        }
      };
    },
  );
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const HeaderMyAccount = connectionStrategies(HeaderMyAccountStatic);
  
  // Étape 3 : on exporte le composant connecté qui a été généré
  
  export default HeaderMyAccount

/* <a type ='button' className='btn btn-success' href='/'>Accueil</a> */