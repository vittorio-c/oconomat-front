/* import './style.sass' */
import React from 'react';
import Header from '../HeaderMyAccount';
/* Import du fichier Sass */
import './Recipe.sass'


const Recipe = () => {
    return (
        <main> 
           
            <div className="recipe-page">
                    <h2 className='m-3'>Voici votre recette</h2>
                         <div className="recipe-detail">
                            <div className="recipe-name">
                                 <h3>Pancakes au sirop d'érable</h3>
                            </div>
                            <div className="recipe-image">
                                <img src="src/ressources/pictures/pancakes.jpg" className="img-fluid" alt="Responsive image">
                                </img>
                            </div>
                            <div className="recipe-ingredients">
                                <h3>Vos ingredients</h3>
                                <ul>
                                    <li>280 g de farine</li>
                                    <li>3 oeufs</li>
                                    <li>2 yaourts natures</li>
                                    <li>2 pots de yaourt de lait (les pots contiennent le lait)</li>
                                    <li>1 cuillère à soupe d'huile d'olive</li>
                                    <li>1 demi de levure</li>
                                    <li>4 pincées de sel</li>
                                    <li>1 bouteille de sirop d'érable</li>
                                    <li>900 ml de glace vanille</li>
                                    <li>Amande effilées</li>
                                </ul>
                            </div>
                            <div className="recipe-steps">
                                <ol>
                                    <li>
                                        <h3>Etape 1</h3>
                                        <p>Mélangez au fouet la farine, la levure, les yaourts et les yaourts de lait. Fouettez jusqu'à ce qu'il n'y ait plus de grumeaux.</p>
                                    </li>
                                    <li>
                                        <h3>Etape 2</h3>
                                        <p>Cassez les oeufs dans un récipient à part et battez-les à l'aide d'une fourchette. Versez le tout dans la préparation. Mélangez bien.</p>
                                    </li>
                                    <li>
                                        <h3>Etape 3</h3>
                                        <p>Ajoutez ensuite le sel et l'huile d'olive</p>
                                    </li>
                                    <li>
                                        <h3>Etape 4</h3>
                                        <p>Donnez un dernier coup de fouet et cuisez chaque pancakes dans un petit poêle (1 pancake = une louche de préparation).</p>
                                    </li>
                                    <li>
                                        <h3>Etape 5</h3>
                                        <p>Une fois les pancakes cuits, mettez-les dans une assiette, et disposez une boule de glace vanille sur le dessus, avec les amandes effilées et du sirop d'érable.</p>
                                    </li>
                                    <li>
                                        <h3>Etape 6</h3>
                                        <p>Servez les pancakes.</p>
                                    </li>   
                                </ol> 
                            </div>
                        </div>
            </div>
        </main>
    )
}


export default Recipe;