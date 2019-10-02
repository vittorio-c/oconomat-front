import React from 'react';

import HeaderMyAccount from '../HeaderMyAccount';
import Footer from 'src/components/Footer';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";
import './Recipes.sass';
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios' 


const RecettesStatic = ({recipes,findRecipe}) => {
    return (
        <body className ="Site">
            <div className="Site-content">
                <div className="App-header">
                    <HeaderMyAccount/>
                </div>
                <main className="main">
                    <RecipesMain recipes={recipes} findRecipe={findRecipe}/>
                </main>
            </div>
            <Footer />
        </body>
    )
} 

const RecipesMain = ({recipes,findRecipe}) => {
    return <div className="recipes-main">
        <h2 className="recipes-title col-sm-6 offset-sm-3 ">Liste de vos Recettes Pour la Semaine</h2>  
        <div className="col-xs-12 col-md-8 offset-md-2 recipe-box">
        <Carousel> 
        {recipes.map(function(recipe,index){  
        return <Carousel.Item>
            <img className="d-block w-100 max-height" src="src/ressources/pictures/pancakes.jpg"/>
        <Carousel.Caption>
        <h3 className="recipes-name-title">Pancakes</h3> 
        <button className="details-btn btn" onClick={()=>{findRecipe(index,recipes)}}> <Link to="/Recipe">  <a >Details</a> </Link> </button> 
        <p className="text-black">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        })} 
        </Carousel>

        { /*
        <Carousel.Item>
            <img className="d-block w-100 max-height" src="src/ressources/pictures/ramen.jpg" alt="Second slide"/>
        <Carousel.Caption>
        <h3 className="recipes-name-title">Ramen</h3>  
        <button className="details-btn btn"><a href="/Recipe">Details</a></button>
        <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 max-height" src="src/ressources/pictures/soup.jpg" alt="Third slide"/>
        <Carousel.Caption>
            <h3 className="recipes-name-title">Soupe du siecle</h3> 
        <button className="details-btn btn"> <a href="/Recipe">Details</a></button>
        <p className="text-black">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
        </Carousel.Caption>
        </Carousel.Item>
        */}
        
        
    </div> 
    </div>
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
      },
      findRecipe:(id,recipes) =>{
        const url = recipes[id] 
        axios.get(url).then((response)=>{
          const action={type:'See-Recipe',value:response};
          dispatch(action);
        })
      }
      
    };
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const Recettes = connectionStrategies(RecettesStatic);

// Étape 3 : on exporte le composant connecté qui a été généré 




export default Recettes;
