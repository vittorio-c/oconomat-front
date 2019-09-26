import './style.sass'
import React from 'react';

const Home = () => {
    return (
        <main>
            <Logo />
            <Steps />
            <FormExplanations />
            <BudgetExplanations />
            <RecipesExplanations />
            <BuyingExplanations />
            <FinalMessageButton />
        </main>
    )
}

const Logo = () => {
    return(
    <div className = 'container-fluid border border-warning '>
    <h2>Une panne d'inspiration ?</h2>
    <h1>OCONOMAT</h1>
    <h2>vous propose des repas en respectant votre budget</h2>
    </div>
    )
}

const Steps = () => {
    return (
        <div className = 'info'>
        <ol>
            <li>
               <strong>1.</strong>Oconomat vous propose des petits-déjeuners, des déjeuners et des dîners pendant 7 jours.
                Tout en respectant le budget que vous aurez défini.
            </li>
            <li>
                <strong>2.</strong>
                Oconomat vous propose des petits-déjeuners, des déjeuners et des dîners pendant 7 jours.
                Tout en respectant le budget que vous aurez défini.
            </li>
            <li>
                <strong>3.</strong>Enfilez votre tablier et suivez les étapes de préparation.
            </li>
            <li>
                <strong>4.</strong>Régalez-vous !
            </li>
        </ol>
    </div>
    )
}

const FormExplanations = () => {
    return(
        <div>
            <h2>Inscrivez vous via le formulaire</h2>
        </div>
    )
} 

const BudgetExplanations = () => {
return(
    <div>
         <h2>Définissez le budget de la semaine dans la rubrique Mes objectifs</h2>
    </div>
)
}

const RecipesExplanations = () => {
return(
    <div>
        <h2>Decouvrez vos recettes</h2>
    </div>
)
}

const BuyingExplanations = () => {
return(
    <div>
        <h2>Achetez vos ingredients en suivant votre liste de course</h2>
    </div>
)
}

const FinalMessageButton = () => {
return(
    <div>
        <h2>
            C'est facile Pourquoi ne pas commencer maintenant ?
        </h2>
        <button type="button" className = "btn btn-success">
            Je commence maintenant
        </button>
    </div>
)
}

export default Home ;