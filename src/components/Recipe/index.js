/* import './style.sass' */
import React from 'react';
/* Import du fichier Sass */
import './Recipe.sass'
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";

const RecipeMain = ({recipe,clearRecipe}) => { 
    
    return ( 
        <div className="page"> 
         
        <main> 
            {recipe.data!=undefined ? 
                
            <div className="recipe-page">
                
                    <h2 className='recipe-page-title m-3'>Voici votre recette</h2> 
                    
                         <div className="recipe-detail"> 
                          <Link to="/recipes"><button className="recipe-title btn margin-top" onClick={clearRecipe}> Go Back To Carousel </button></Link>
                            <div className="recipe-name">
                                 <h3>{recipe.data.title} </h3>
                            </div>
                            <div className="recipe-image">
                                <img src={recipe.data.image} className="img-fluid" alt="Responsive image">
                                </img>
                            </div>
                            <div className="recipe-ingredients">
                                <h3 className="ingredients-title">Vos ingredients</h3>
                                <ul>
                                 {recipe.data.ingredients.map(function(element){ 
                                       switch (element.aliment.unit){ 
                                           
                                        case 'unité' : 
                                        element.quantity = Math.ceil(element.quantity)
                                        if (element.quantity > 1 ){element.aliment.unit = 'unités'}
                                        element.aliment.unit = ''
                                        break;
                                        case 'kg' : 
                                        element.quantity = Math.round(element.quantity * 1000),
                                        element.aliment.unit = 'g'
                                        break;
                                        case 'l' :
                                        element.quantity = Math.round(element.quantity * 100),
                                        element.aliment.unit = 'cl'
                                        break;
                                        case 'sachet' :
                                        element.quantity = Math.ceil(element.quantity)
                                        break;
                                        case 'botte' :
                                        element.quantity = Math.ceil(element.quantity)
                                        break;
                                        case 'barquette' :
                                        element.quantity = Math.ceil(element.quantity)
                                        if (element.quantity >1){element.unit = 'barquettes'}
                                        break;
                                        case 'barquettes' :
                                        element.quantity = Math.ceil(element.quantity)
                                        break;
                                        }  
                                     
                                       return <li> <span> {element.quantity} {element.aliment.unit} </span> <span> {element.aliment.name} </span> </li>
                                    })}
                                </ul>
                            </div>
                            <div className="recipe-steps mb-5">
                                <ol> 
                                    {recipe.data.recipeSteps.map(function(element,index){
                                        return <div><h3 className="steps"> Etape {index+1}</h3> 
                                            
                                            <p> {element.content} </p> </div>
                                        
                                    })}
                                 
                                </ol> 
                                
                            </div> 
                            
                        </div> 
                        
                </div>
            : <h2> Recipe Loading </h2>}
            </main>
  </div>
    )
}



const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => { 
     

      return {
        recipes:state.recipes,
        recipe:state.recipe
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
        clearRecipe:()=>{
            const action={type:'Clear-Recipe', value:{}}
            dispatch(action);
        }
        
      };
    },
  );

  const Recipe = connectionStrategies(RecipeMain);

// Étape 3 : on exporte le composant connecté qui a été généré 



export default Recipe;