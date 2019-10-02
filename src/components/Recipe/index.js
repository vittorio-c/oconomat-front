/* import './style.sass' */
import React from 'react';
import HeaderMyAccount from '../HeaderMyAccount';
/* Import du fichier Sass */
import './Recipe.sass'
import {connect} from 'react-redux';

const RecipeMain = ({recipe}) => {
    return (
        <div>
        <main> 
            {recipe.data!=undefined ? 
            <div className="recipe-page">
                {console.log(recipe.data)}
                    <h2 className='recipe-page-title m-3'>Voici votre recette</h2>
                         <div className="recipe-detail">
                            <div className="recipe-name">
                                 <h3>{recipe.data.title} </h3>
                            </div>
                            <div className="recipe-image">
                                <img src="src/ressources/pictures/pancakes.jpg" className="img-fluid" alt="Responsive image">
                                </img>
                            </div>
                            <div className="recipe-ingredients">
                                <h3 className="ingredients-title">Vos ingredients</h3>
                                <ul>
                                 {recipe.data.ingredients.map(function(element){
                                       return <li> <span> {element.quantity} {element.aliment.unit} </span> <span> {element.aliment.name} </span> </li>
                                    })}
                                </ul>
                            </div>
                            <div className="recipe-steps">
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
     
      
      //console.log(state.recipes);
      return {
        recipes:state.recipes,
        recipe:state.recipe
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
        
        
      };
    },
  );

  const Recipe = connectionStrategies(RecipeMain);

// Étape 3 : on exporte le composant connecté qui a été généré 



export default Recipe;