import React from 'react';
import { Button,Nav,Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route,Switch,Link,Redirect} from "react-router-dom";
import axios from 'axios'
import './HeaderSuper.sass';
/* onClick={() =>{document.location.reload() } } */

const HeaderSuperStatic =({getRecipes,disconnectUser}) => {

    if (sessionStorage.jwtToken === '' || sessionStorage.jwtToken === undefined ){
     
        return (
          <div className="sticky-top">
            <div className = 'phonescreen d-lg-none'>
                <div className="d-flex justify-content-around navbar-dark bg-dark ">
                  <Link to="/">  <button className=" btn btn-light fa fa-home fa-2x my-1"> </button>  </Link>
                  <Link to="/Contact"> <button className="btn btn-light fa fa-phone fa-2x my-1"></button></Link>
                  <Link to="/SignUp"> <button className="btn btn-light fa fa-file-signature fa-2x my-1"></button></Link>
                  <Link to="/SignIn">  <button className="btn btn-light fa fa-plug fa-2x my-1"></button></Link>
                </div>
            </div>

            <div className ='largescreen d-none d-lg-block'>
              <div className="d-flex justify-content-around navbar-dark bg-dark text-light ">
                  <div> <Link to="/">Accueil</Link></div> 
                  <div> <Link to="/Contact">Contact</Link></div> 
                  <div> <Link to="/SignUp">S'inscrire</Link></div> 
                  <div> <Link to="/SignIn">Se connecter</Link></div>    
              </div>
            </div>    
              
          </div>
          
          
        )
    } else
    return(
      <div className="sticky-top">
        <div className = 'phonescreen d-lg-none'>
            <div className="d-flex justify-content-around navbar-dark bg-dark ">
              <Link to="/contact"> <button className="btn btn-light fa fa-phone fa-2x my-1"></button></Link>
              <Link to="/dashboard"><button className="btn btn-light fa fa-user fa-2x my-1"></button></Link>
              <Link to="/Recipes" onClick={getRecipes}> <button className="btn btn-light fa fa-book-open fa-2x my-1 "></button> </Link> 
              <Link to="/marketList"> <button className="btn btn-light fa fa-shopping-cart fa-2x my-1"></button></Link>
              <Link to="/"> <button onClick={disconnectUser} className="bg-danger btn btn-dark fa fa-user-slash fa-2x my-1"></button> </Link> 
            </div>
        </div>
        <div className ='largescreen d-none d-lg-block'>
              <div className="d-flex justify-content-around navbar-dark bg-dark text-light ">
                  <div> <Link to="/dashboard">Tableau de bord</Link></div> 
                  <div> <Link to="/recipes" onClick={getRecipes}>Recettes</Link></div> 
                  <div> <Link to="/marketlist">Liste de course</Link></div>    
                  <div > <Link to="/" onClick={disconnectUser} className ='deco '>Déconnexion</Link></div>    

              </div>
            </div>    
      </div>
    )
} 
/* informations from Bootstrap's documentation 
https://getbootstrap.com/docs/4.3/components/buttons/
*/

const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => { 
      
      //console.log(state.recipes);
      return {
        recipes:state.recipes
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {

        disconnectUser:()=>{
            
            document.location.reload();
            sessionStorage.clear();
            console.log(ownProps);
            ownProps.history.push('/');
        },
        getRecipes:(event) => { 
          
          var token=sessionStorage.getItem('jwtToken')
          var url ='http://api.oconomat.fr/api/menu/user/last';
          axios.get(
            url,{
            headers:{
              'Authorization':`bearer ${token}`
            }
          }
          ).then((response)=>{
            var recipes=response.data.recipes
            const action={type:'Show-Recipes',value:recipes} 
            dispatch(action);
            
          })
        
        }
      };
    },
  );
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const HeaderSuper = connectionStrategies(HeaderSuperStatic);
  
  // Étape 3 : on exporte le composant connecté qui a été généré
  
export default HeaderSuper;