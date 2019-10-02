/* import './style.sass' */
import React from 'react';
import Header from '../HeaderMyAccount';
/* Import du fichier Sass */
import HeaderBackToHomePage from '../HeaderBackToHomePage';
import './Recipe.sass'
import Footer from 'src/components/Footer';
import {connect} from 'react-redux';

const RecipeMain = ({recipe}) => {
    return (
        <div>
        <header>
          <HeaderBackToHomePage />
        </header>
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
                                    <li>
                                        <h3 className="steps">Etape 1</h3>
                                        <p>Mélangez au fouet la farine, la levure, les yaourts et les yaourts de lait. Fouettez jusqu'à ce qu'il n'y ait plus de grumeaux.</p>
                                    </li>
                                    <li>
                                        <h3 className="steps">Etape 2</h3>
                                        <p>Cassez les oeufs dans un récipient à part et battez-les à l'aide d'une fourchette. Versez le tout dans la préparation. Mélangez bien.</p>
                                    </li>
                                    <li>
                                        <h3 className="steps">Etape 3</h3>
                                        <p>Ajoutez ensuite le sel et l'huile d'olive</p>
                                    </li>
                                    <li>
                                        <h3 className="steps">Etape 4</h3>
                                        <p>Donnez un dernier coup de fouet et cuisez chaque pancakes dans un petit poêle (1 pancake = une louche de préparation).</p>
                                    </li>
                                    <li>
                                        <h3 className="steps">Etape 5</h3>
                                        <p>Une fois les pancakes cuits, mettez-les dans une assiette, et disposez une boule de glace vanille sur le dessus, avec les amandes effilées et du sirop d'érable.</p>
                                    </li>
                                    <li>
                                        <h3 className="steps">Etape 6</h3>
                                        <p>Servez les pancakes.</p>
                                    </li>   
                                </ol> 
                            </div>
                        </div>
                </div>
            : <h2> Recipe Loading </h2>}
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