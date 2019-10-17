/* import './style.sass' */
import React from 'react';
import {connect} from 'react-redux';
import {Animated} from "react-animated-css";
/* Import du fichier Sass */
import './Home.sass'

const HomePageStatic = ({messages}) => {
    return (
         <HomePage messages={messages}/>
    )
}

const HomePage = ({messages}) => {
    return <div className ="bg-light">
    <Logo messages={messages} />
    <Steps />
</div>

}

const Logo = ({messages}) => {
    return(
        <div className ='container px-0 text-center col-xs-12 col-lg-9 '>
            <div className ='food-image fluid-width img-thumbnail text-light  pt-4'>
                <div className = "text-box"> 
                    {messages.welcomeMessage!='' && messages.welcomeMessage!=undefined ? <h4 className="alert alert-success" role="alert"> {messages.welcomeMessage} </h4> : <span> </span> }
                    
                    <h2 className='home-catch-sentence m-3 '>Une panne d'inspiration ?</h2>
                    <div className="row justify-content-center">
                        <div className="bg-light p-1 rounded col-12 col-md-5 col-lg-4 col-xl-3"><img className="logo" src="src/ressources/pictures/logo_oconomat_vert.png"></img></div>
                    </div>
                    <h3 className='home-catch-sentence m-3 '>vous propose des repas en respectant votre budget</h3>
                </div>
            </div>
        </div>
    )
}

const Steps = () => {
    return (
        <div>
            <Animated animationIn="zoomInUp" animationOut="slideOutRight" animationInDuration={1400} animationOutDuration={2000} isVisible={true}>
            <p className='display-4 text-center text-success'>Le principe en quelques lignes </p> 
            </Animated>
            <div className = "mt-3 pt-3 mb-3 pb-3 col-xs-12 col-lg-6 offset-lg-3">
                <ul className="list-group">
                    <li className="list-group-item d-flex align-items-center">
                    <span className="badge">1</span>
                    Oconomat vous propose des petits-déjeuners, des déjeuners et des dîners pendant 7 jours.
                    </li> 
                    <li className="list-group-item d-flex align-items-center">
                    <span className="badge">2</span>
                    Faites vos courses.<br/>
                    
                    Oconomat vous fourni une liste de course déjà tout prête avec les ingredients dont vous aurez besoin pour la semaine.
                    </li> 
                    <li className="list-group-item d-flex align-items-center">
                    <span className="badge">3</span>
                    Enfilez votre tablier et suivez les étapes de préparation.
                    </li> 
                    <li className="list-group-item d-flex align-items-center">
                    <span className="badge">4</span>
                    Régalez-vous !
                    </li>
                </ul>
                
                </div>
                    <div className = 'justify-content-lg-center d-lg-flex'>
                
                        <div className ='col-xs-12 ' >
                            <h3 className= 'title-explaination text-center font-weight-bold '>Inscrivez vous via le formulaire</h3>
                            <img src="src/ressources/pictures/inscription.png" className="exemple-img img mx-auto d-block" alt="Responsive image"/>
                         </div>    
                        

                            <div className = 'd-none d-lg-block' >
                             <img src="src/ressources/pictures/arrow.png" className="exemple-img  img arrow" alt="arrow image"/>
                        
                            </div>
                       
                        <div >
                            <h3 className= 'title-explaination text-center font-weight-bold mt-4'>Définissez le budget de la semaine dans la rubrique Mes objectifs</h3>
                            <img src="src/ressources/pictures/objectives.png" className="img img-objective mx-auto d-block" alt="Responsive image"/>
                        </div>  

                        <div className ='d-none d-lg-block' >
                            <img src="src/ressources/pictures/arrow.png" className=" img arrow" alt="arrow image"></img>
                        </div>

                        <div >  
                            <h3 className= 'title-explaination text-center font-weight-bold'>Decouvrez vos recettes</h3>
                            <img src="src/ressources/pictures/recipe.png" className=" img mx-auto d-block" alt="Responsive image"/>
                        </div>

                        <div className ='d-none d-lg-block' >
                            <img src="src/ressources/pictures/arrow.png" className=" img arrow" alt="arrow image"></img>
                        </div>

                        <div>
                            <h3 className= 'title-explaination text-center font-weight-bold'>Achetez vos ingredients en suivant votre liste de course</h3>
                            <img src="src/ressources/pictures/list.png" className=" img mx-auto d-block" alt="Responsive image"/>
                        </div>
                        <div className ='d-none d-lg-block' >
                        <img src="src/ressources/pictures/arrow.png" className=" img arrow" alt="arrow image"></img>
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
      return {
        messages: state.messages
        
       
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