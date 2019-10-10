import React from 'react';

import {connect} from 'react-redux';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";
import './Recipes.sass';
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios' 


const RecettesStatic = ({recipes,findRecipe}) => {
    return (
        <main>
            <div className="Site-content">
                <main className="main">
                    <RecipesMain recipes={recipes} findRecipe={findRecipe}/>
                </main>
            </div>
        </main>
       
    )
} 

const RecipesMain = ({recipes,findRecipe}) => { 
    if(recipes.length>0){
   var prices=recipes.map(function(recipe){
       return recipe.price
   }) 

   var reducer=(accumulator,currentValue)=>{
       return accumulator+currentValue
   } 

   console.log(prices.reduce(reducer));
}
   
    return <div className="recipes-main">
        
        <h2 className="recipes-title col-sm-6 offset-sm-3 ">Liste de vos Recettes Pour la Semaine</h2>  
        <div className="col-xs-12 col-md-8 offset-md-2 recipe-box"> 
    
        <Carousel> 
        {recipes.map(function(recipe,index){  
           
        return <Carousel.Item>
            <img className="d-block w-100 max-height" src={recipe.image}/>
        <Carousel.Caption>
        <h3 className="recipes-name-title">{recipe.title} </h3> 
        <Link to="/Recipe"> <button className="details-btn btn" onClick={()=>{findRecipe(index,recipes)}}>   <a >Details</a>  </button> </Link>
        <p className="text-black">A manger pour le {recipe.type}</p> 
        <p className="text-black"> Prix: {recipe.price} £ </p>
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
    {console.log(state.recipes)};
    
    //console.log(state.recipes);
    return {
      recipes:state.recipes,
      recipe:state.recipe
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
      
      findRecipe:(id,recipes) =>{ 
        const url = recipes[id].url;
        var token=sessionStorage.getItem('jwtToken')
        axios.get(url,{headers:{'Authorization':`bearer ${token}`}}).then((response)=>{ 
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
