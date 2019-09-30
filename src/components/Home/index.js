/* import './style.sass' */
import React from 'react';



import Header from '../HeaderVisitor';
import Footer from 'src/components/Footer';

/* Import du fichier Sass */
import './style.sass'
const Home = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <div className ="bg-light">
                    <Logo />
                    <Steps />
                    <Explanations />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

const Logo = () => {
    return(
    <div className ='food-image img-thumbnail mt-3 text-light pt-4'>
        <div className = "in-image-text">
            <h2 className='m-3 '>Une panne d'inspiration ?</h2>
            <h1 className='m-3 font-weight-bold'>OCONOMAT</h1>
            <h3 className='m-3 '>vous propose des repas en respectant votre budget</h3>
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

const Explanations = () => {
    return(
        <div>
            <h3 className= 'text-center font-weight-bold'>Inscrivez vous via le formulaire</h3>
            <img src="src/ressources/pictures/form.png" className="img-fluid img" alt="Responsive image"></img>
        
            <h3 className= 'text-center font-weight-bold mt-4'>Définissez le budget de la semaine dans la rubrique Mes objectifs</h3>
            <img src="src/ressources/pictures/objectives.png" className="img-fluid img" alt="Responsive image"></img>
            <h3 className= 'text-center font-weight-bold mt-4'>Decouvrez vos recettes</h3>
            <img src="src/ressources/pictures/recipe.png" className="img-fluid img" alt="Responsive image"></img>
   
            <h3 className= 'text-center font-weight-bold mt-4'>Achetez vos ingredients en suivant votre liste de course</h3>
            <img src="src/ressources/pictures/list.png" className=" img-center img-fluid img" alt="Responsive image"></img>
 
            <h3 className= 'text-center font-weight-bold mt-4'>
                C'est facile Pourquoi ne pas commencer maintenant ?
            </h3>
            <a className ="btn btn-success btn-md btn-block mt-3" href="/SignUp" role="button">Je commence maintenant</a>
        </div>
    )
} 


export default Home ;