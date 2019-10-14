/* import './style.sass' */
import React from 'react';
import {connect} from 'react-redux';

/* Import du fichier Sass */
import './Home.sass'

const HomePageStatic = ({welcomeMessage}) => {
    return (
         <HomePage welcomeMessage={welcomeMessage}/>
    )
}

const HomePage = ({welcomeMessage}) => {
    return <div className ="bg-light">
    <Logo welcomeMessage={welcomeMessage} />
    <Steps />
</div>

}

const Logo = ({welcomeMessage}) => {
    return(
        <div className ='container text-center col-xs-12 col-lg-10'>
            <div className ='food-image img-thumbnail text-light  pt-4'>
                <div className = "text-box"> 
                {console.log(welcomeMessage)}
                    {welcomeMessage!='' ? <h4 className="alert alert-success" role="alert"> {welcomeMessage} </h4> : <span> </span> }
                    
                    <h2 className='home-catch-sentence m-3 '>Une panne d'inspiration ?</h2>
                    <h1 className='home-title text-success'>OCONOMAT</h1>
                    <h3 className='home-catch-sentence m-3 '>vous propose des repas en respectant votre budget</h3>
                </div>
            </div>
        </div>
    )
}

const Steps = () => {
    return (
        <div><p className='display-4 text-center text-success'>Le principe en quelque lignes </p> 
            <div className = "mt-3 pt-3 mb-3 pb-3 col-xs-12 col-lg-6 offset-lg-3">
                <table className="table table-striped">
                <thead>
                </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className = "text-success font-weight-bold display-4">1</th>
                            <th scope="col" className ="font-weight-bold">Oconomat vous propose des petits-déjeuners, des déjeuners et des dîners pendant 7 jours.</th>
                        </tr>
                        <tr>
                            <th scope="row" className = "text-success font-weight-bold display-4" >2</th>
                            <td ><span className ="font-weight-bold">Faites vos courses.</span>
                                <th className="font-italic">Oconomat vous fourni une liste de course déjà tout prête avec les ingredients dont vous aurez besoin pour la semaine.</th>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" className = "text-success font-weight-bold display-4">3</th>
                        <td className ="font-weight-bold"> Enfilez votre tablier et suivez les étapes de préparation.</td>
                        </tr>
                        <tr>
                        <th scope="row" className = "text-success font-weight-bold display-4">4</th>
                        <td className ="font-weight-bold">Régalez-vous !</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                    <div className = 'justify-content-lg-center d-lg-flex'>
                
                        <div className ='col-xs-12 ' >
                            <h3 className= 'title-explaination text-center font-weight-bold '>Inscrivez vous via le formulaire</h3>
                            <img src="src/ressources/pictures/inscription.png" className="exemple-img img-fluid img mx-auto d-block" alt="Responsive image"/>
                         </div>    
                        

                            <div className = 'd-none d-lg-block' >
                             <img src="src/ressources/pictures/arrow.png" className="exemple-img img-fluid img arrow" alt="arrow image"/>
                        
                            </div>
                       
                        <div >
                            <h3 className= 'title-explaination text-center font-weight-bold mt-4'>Définissez le budget de la semaine dans la rubrique Mes objectifs</h3>
                            <img src="src/ressources/pictures/objectives.png" className="img-fluid img img-objective mx-auto d-block" alt="Responsive image"/>
                        </div>  

                        <div className ='d-none d-lg-block' >
                            <img src="src/ressources/pictures/arrow.png" className="img-fluid img arrow" alt="arrow image"></img>
                        </div>

                        <div >  
                            <h3 className= 'title-explaination text-center font-weight-bold'>Decouvrez vos recettes</h3>
                            <img src="src/ressources/pictures/recipe.png" className="img-fluid img mx-auto d-block" alt="Responsive image"/>
                        </div>

                        <div className ='d-none d-lg-block' >
                            <img src="src/ressources/pictures/arrow.png" className="img-fluid img arrow" alt="arrow image"></img>
                        </div>

                        <div>
                            <h3 className= 'title-explaination text-center font-weight-bold'>Achetez vos ingredients en suivant votre liste de course</h3>
                            <img src="src/ressources/pictures/list.png" className="img-fluid img mx-auto d-block" alt="Responsive image"/>
                        </div>
                        <div className ='d-none d-lg-block' >
                        <img src="src/ressources/pictures/arrow.png" className="img-fluid img arrow" alt="arrow image"></img>
                    </div>

                        <div> 
                            <div className="box">
                                <a className ="start btn btn-success" href="/signup" role="button">Je commence maintenant</a>
                            </div>
                        </div>
                    </div>
                </div>
    )
}


const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => { 
        console.log(state.welcomeMessage)
      return {
        welcomeMessage: state.welcomeMessage
        
       
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
        
       
// var inputValues = new FormData();
 
     
    
      };
    },
  );
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const Home = connectionStrategies(HomePageStatic);



export default Home ;