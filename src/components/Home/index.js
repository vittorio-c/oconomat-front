/* import './style.sass' */
import React from 'react';


/* Import du fichier Sass */
import './style.sass'
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
    <div className ='food-image img-thumbnail mt-3 text-center text-light'>
        <div className = "in-image-text">
            <p className='m-3 '>Une panne d'inspiration ?</p>
            <h1 className='m-3 font-weight-bold'>OCONOMAT</h1>
            <p className='m-3 '>vous propose des repas en respectant votre budget</p>
        </div>
    </div>
    )
}

const Steps = () => {
    return (
        <div className = "mt-3 pt-3 mb-3 pb-3 steps container-fluid">
            <table className="table table-striped">
            <thead>
            </thead>
                <tbody>
                    <tr>
                    <th scope="row" className = "text-warning font-weight-bold display-4">1</th>
                    <th scope="col" className ="font-weight-bold">Oconomat vous propose des petits-déjeuners, des déjeuners et des dîners pendant 7 jours.</th>
                    </tr>
                    <tr>
                    <th scope="row" className = "text-warning font-weight-bold display-4" >2</th>
                    <td ><span className ="font-weight-bold">Faites vos courses.</span>
                    <p className="font-italic">Oconomat vous fourni une liste de course déjà tout prête avec les ingredients dont vous aurez besoin pour la semaine.</p>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row" className = "text-warning font-weight-bold display-4">3</th>
                    <td className ="font-weight-bold"> Enfilez votre tablier et suivez les étapes de préparation.</td>
                    </tr>
                    <tr>
                    <th scope="row" className = "text-warning font-weight-bold display-4">4</th>
                    <td className ="font-weight-bold">Régalez-vous !</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const FormExplanations = () => {
    return(
        <div>
            <p className= 'text-center font-weight-bold'>Inscrivez vous via le formulaire</p>
            <img src="src/ressources/pictures/form.png" className="img-fluid" alt="Responsive image"></img>
        </div>
    )
} 

const BudgetExplanations = () => {
    return(
        <div>
            <p className= 'text-center font-weight-bold'>Définissez le budget de la semaine dans la rubrique Mes objectifs</p>
            <img src="src/ressources/pictures/objectives.png" className="img-fluid" alt="Responsive image"></img>
        </div>
    )
}

const RecipesExplanations = () => {
    return(
        <div>
            <p className= 'text-center font-weight-bold'>Decouvrez vos recettes</p>
            <img src="src/ressources/pictures/recipe.png" className="img-fluid" alt="Responsive image"></img>
        </div>
    )
}

const BuyingExplanations = () => {
    return(
        <div>
            <p className= 'text-center font-weight-bold'>Achetez vos ingredients en suivant votre liste de course</p>
            <img src="src/ressources/pictures/list.png" className=" img-center img-fluid" alt="Responsive image"></img>
        </div>
    )
}

const FinalMessageButton = () => {
    return(
        <div>
            <p className= 'text-center font-weight-bold'>
                C'est facile Pourquoi ne pas commencer maintenant ?
            </p>
            <button type="button" className = "btn btn-success btn-md btn-block mt-3">
                Je commence maintenant
            </button>
        </div>
    )
}

export default Home ;