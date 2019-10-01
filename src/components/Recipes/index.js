import React from 'react';

import HeaderMyAccount from '../HeaderMyAccount';
import Footer from 'src/components/Footer';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";
import './app.sass';
import Carousel from 'react-bootstrap/Carousel' 
import axios from 'axios';


const RecettesStatic=({axiosTest,recipes}) => { 
 
    return ( 

      <div className="container white"> 
        
       
      <header>
        <HeaderMyAccount />
      </header> 
      <LinkToUserPage/> 
      <main>
         
            <h2 className="col-sm-6 offset-sm-4 "> Liste de vos Recettes Pour la Semaine </h2>  
            
            <div className=" col-xs-12 col-md-8 offset-md-2 recipe-box">
            <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 max-height"
              src="src/Images/pasta.jpg"
              
            />
            <Carousel.Caption>
              <h3 className="text-blue"> <a href="#"> Recipe Name (See Details) </a> </h3> 
              <button className="btn btn-primary">Check Off</button> 
              <p className="text-black">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 max-height"
              src="src/Images/pasta.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="text-blue"> <a href="#"> Recipe Name (See Details) </a> </h3> 
              <button className="btn btn-primary"> Check Off </button>
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 max-height"
              src="src/Images/steak2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="text-blue"> <a href="#"> Recipe Name (See Details) </a> </h3> 
              <button className="btn btn-primary"> Check Off </button>
              <p className="text-black">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    



            
            </div>

        
        
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
    )
} 


const LinkToUserPage =() => {
  return <div> <Link to="/Account"><button class="btn btn-primary col-md-3 offset-md-5 margin-top"> Retour A Mon Compte </button> </Link>  </div>
}


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
      sayHello: () => {
        console.log('hello')
      }
      
    };
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const Recettes = connectionStrategies(RecettesStatic);

// Étape 3 : on exporte le composant connecté qui a été généré

export default Recettes;
