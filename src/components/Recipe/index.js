/* import './style.sass' */
import React from 'react';
import HeaderMyAccount from '../HeaderMyAccount';
/* Import du fichier Sass */
import HeaderBackToHomePage from '../HeaderBackToHomePage';
import './Recipe.sass'
import Footer from 'src/components/Footer';

const Recipe = () => {
    return (
        <body className ="Site">
            <div className="Site-content">
                <div className="App-header">
                    <HeaderMyAccount/>
                </div>
                <main className="main">
                    <RecipeMain />
                </main>
            </div>
            <Footer />
        </body>
    )
}

const RecipeMain = () => {
    return <div className="recipe-page">
    <h2 className='recipe-page-title m-3'>Voici votre recette</h2>
         <div className="recipe-detail">
            <div className="recipe-name">
                 <h3>Pancakes au sirop d'érable</h3>
            </div>
            <div className="recipe-image">
                <img src="src/ressources/pictures/pancakes.jpg" className="img-fluid" alt="Responsive image">
                </img>
            </div>
            <div className="recipe-ingredients">
                <h3 className="ingredients-title">Vos ingredients</h3>
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
}

export default Recipe;