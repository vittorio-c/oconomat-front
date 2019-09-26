/* import './style.sass' */
import React from 'react';

const Home = () => {
    return (
        <main>
            <div className ="main-frame">
                <Logo />
                <Steps />
                <FormExplanations />
                <BudgetExplanations />
                <RecipesExplanations />
                <BuyingExplanations />
                <FinalMessageButton />
            </div>
        </main>
    )
}

const Logo = () => {
    return(
    <div className ='border border-warning food-image p-3'>
        
        <h2 className='m-3 text-center  '>Une panne d'inspiration ?</h2>
        <h1 className='m-3 text-center font-weight-bold font-size:3px'>OCONOMAT</h1>
        <h2 className='m-3 text-center'>vous propose des repas en respectant votre budget</h2>
    </div>
    )
}

const Steps = () => {
    return (
        <div className = "mt-3 pt-3 mb-3 pb-3 steps container-fluid border border-warning">
            <table class="table table-striped">
                <tr>
                <th scope="row" className = "">1</th>
                <th scope="col">Oconomat vous propose des petits-déjeuners, des déjeuners et des dîners pendant 7 jours.</th>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Faites vos courses.
                Oconomat vous fourni une liste de course déjà tout prête avec les ingredients dont vous aurez besoin pour la semaine.
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td> Enfilez votre tablier et suivez les étapes de préparation.</td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>Régalez-vous !</td>
                </tr>
            </table>
        </div>
    )
}

const FormExplanations = () => {
    return(
        <div>
            <h2>Inscrivez vous via le formulaire</h2>
            <img src="src/ressources/pictures/form.png" class="img-fluid" alt="Responsive image"></img>
        </div>
    )
} 

const BudgetExplanations = () => {
    return(
        <div>
            <h2>Définissez le budget de la semaine dans la rubrique Mes objectifs</h2>
            <img src="src/ressources/pictures/objectives.png" class="img-fluid" alt="Responsive image"></img>
        </div>
    )
}

const RecipesExplanations = () => {
    return(
        <div>
            <h2>Decouvrez vos recettes</h2>
            <img src="src/ressources/pictures/recipe.png" class="img-fluid" alt="Responsive image"></img>
        </div>
    )
}

const BuyingExplanations = () => {
    return(
        <div>
            <h2>Achetez vos ingredients en suivant votre liste de course</h2>
            <img src="src/ressources/pictures/list.png" class="img-fluid" alt="Responsive image"></img>
        </div>
    )
}

const FinalMessageButton = () => {
    return(
        <div>
            <h2>
                C'est facile Pourquoi ne pas commencer maintenant ?
            </h2>
            <button type="button" className = "btn btn-success btn-md btn-block">
                Je commence maintenant
            </button>
        </div>
    )
}

export default Home ;