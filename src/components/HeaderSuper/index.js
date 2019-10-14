import React from 'react';
import { Button,Nav,Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route,Switch,Link,Redirect} from "react-router-dom";
import axios from 'axios'
import './HeaderSuper.sass';


const HeaderSuperStatic =({getRecipes,disconnectUser,getMarketList}) => {

    if (sessionStorage.jwtToken === '' || sessionStorage.jwtToken === undefined ){
     
        return (
          <div className="sticky-top">
            <div className = 'phonescreen d-lg-none'>
                <div className="d-flex justify-content-around navbar-dark bg-dark">
                  <Link to="/">  <button className=" btn btn-light fa fa-home fa-2x my-1"> </button>  </Link>
                  <Link to="/Contact"> <button className="btn btn-light fa fa-phone fa-2x my-1"></button></Link>
                  <Link to="/SignUp"> <button className="btn btn-light fa fa-file-signature fa-2x my-1"></button></Link>
                  <Link to="/SignIn">  <button className="btn btn-light fa fa-plug fa-2x my-1"></button></Link>
                </div>
            </div>

            <div className ='font-size largescreen d-none d-lg-block'>
              <div className="d-flex radius justify-content-start bg-light py-3 border-bottom border-success mt-0 mb-2">
                  <Link className="mr-3" to="/"><img className="logo" src="src/ressources/pictures/logo_oconomat_vert.png"></img></Link>
                  <div className="row align-content-center ml-5">
                    <Link className="mr-3" to="/">Accueil</Link>
                    <Link className="mr-3" to="/Contact">Contact</Link> 
                    <Link className="mr-3" to="/SignUp">S'inscrire</Link>
                    <Link className="mr-3" to="/SignIn">Se connecter</Link>  
                  </div>
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
              <Link to="/Recipes" onClick={getRecipes} > <button className="btn btn-light fa fa-book-open fa-2x my-1 "></button> </Link> 
              <Link to="/marketList" onClick={getMarketList} ><button  className="btn btn-light fa fa-shopping-cart fa-2x my-1" ></button></Link>
              <Link to="/"> <button onClick={disconnectUser} className="bg-danger btn btn-dark fa fa-user-slash fa-2x my-1"></button> </Link> 
            </div>
        </div>
        <div className ='font-size largescreen d-none d-lg-block'>
              <div className="d-flex radius justify-content-start bg-light py-3 border-bottom border-success mt-0 mb-2">
                  <img className="logo" src="src/images/logo_oconomat_vert.png"></img>
                  <div className="row align-content-center ml-5">
                      <Link className="mr-3" to="/dashboard">Tableau de bord</Link>
                      <Link className="mr-3" to="/recipes" onClick={getRecipes}>Recettes</Link>
                      <Link className="mr-3" to="/marketlist">Liste de course</Link>
                      <Link className="mr-3" to="/" onClick={disconnectUser} className ='deco '>Déconnexion</Link>  
                  </div>
              </div>

              <div className="d-flex justify-content-around navbar-dark bg-dark text-light ">
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
      return {
        recipes:state.recipes,
        shoppingList: state.shoppingList
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
        getMarketList:(event) => {
          var token = sessionStorage.getItem('jwtToken');
          var idMenu = sessionStorage.getItem('idMenu');
          var url ='http://api.oconomat.fr/api/menu/'+ idMenu +'/shopping-list';
          axios.get(
            url,
            {
              headers:{
                'Authorization':`bearer ${token}`
            }
          }
          ).then((response)=>{
            console.log('on a une reponse de la liste de course')
          var marketList = response.data.shoppingList;
          const action = {
              type:'SHOW_SHOPPINGLIST',
              value: marketList
          }
            dispatch(action);
          })
        },

        disconnectUser:()=>{
            
            document.location.reload();
            sessionStorage.clear();
            console.log(ownProps)
            //ownProps.history.push('/');
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