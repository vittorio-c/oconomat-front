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
                  <Link to="/"> <button className=" btn btn-light fa fa-home fa-2x my-1"> </button>  </Link>
                  <Link to="/contact"> <button className="btn btn-light fa fa-phone fa-2x my-1"></button></Link>
                  <Link to="/signUp"> <button className="btn btn-light fa fa-file-signature fa-2x my-1"></button></Link>
                  <Link to="/signIn">  <button className="btn btn-light fa fa-plug fa-2x my-1"></button></Link>
                </div>
            </div>

            <div className ='font-size largescreen d-none d-lg-block'>
              <div className="d-flex radius justify-content-start bg-light py-3 border-bottom border-success mt-0">
                  <Link className="mr-3" to="/"><img className="logo" src="src/ressources/pictures/logo_oconomat_vert.png"></img></Link>
                  <div className="row align-content-center ml-5">
                    <Link className="mr-3" to="/">Accueil</Link>
                    <Link className="mr-3" to="/contact">Contact</Link> 
                    <Link className="mr-3" to="/signUp">S'inscrire</Link>
                    <Link className="mr-3" to="/signIn">Se connecter</Link>  
                  </div>
              </div>
            </div>    
              
          </div>
        )
    } else
    return(
      <div className="sticky-top">
        <div className = 'phonescreen d-lg-none'>
            <div className="d-flex justify-content-around navbar-dark bg-dark py-2">
              <Link to="/contact"> <button className="btn btn-light fa fa-phone fa-2x my-1"></button></Link>
              <Link to="/dashboard"><button className="btn btn-light fa fa-user fa-2x my-1"></button></Link>
              <Link to="/recipes" onClick={getRecipes} > <button className="btn btn-light fa fa-book-open fa-2x my-1 "></button> </Link> 
              <Link to="/marketList" onClick={getMarketList} ><button  className="btn btn-light fa fa-shopping-cart fa-2x my-1" ></button></Link>
              <Link to="/" onClick={disconnectUser}> <button  className="bg-danger btn btn-dark fa fa-user-slash fa-2x my-1"></button> </Link> 
            </div>
        </div>
        <div className ='font-size largescreen d-none d-lg-block'>
              <div className="d-flex radius justify-content-start bg-light py-3 border-bottom border-success mt-0 mb-2">
                  <div className="mr-3"><img className="logo img-fluid" src="src/ressources/pictures/logo_oconomat_vert.png"></img> </div>
                  <div className="row align-content-center ml-5 ">
                      <Link className="mr-3" to="/dashboard">Tableau de bord</Link>
                      <Link className="mr-3" to="/recipes" onClick={getRecipes}>Recettes</Link>
                      <Link className="mr-3" to="/marketlist" onClick={getMarketList}>Liste de course</Link>
                      <Link className="mr-3" to="/" onClick={disconnectUser} className ='deco ' href ='/'>Déconnexion</Link>  
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
          var url ='http://api.oconomat.fr/api/menu/user/last';

          axios.get(
            url,{
            headers:{
              'Authorization':`bearer ${token}`
            }
          }).then(
            (response)=>{
            var recipes=response.data.recipes; 
            const action={type:'Show-Recipes',value:recipes} ;
            dispatch(action);
            sessionStorage.setItem('idMenu',response.data.idMenu);
            var idMenu=sessionStorage.getItem('idMenu');
            var url ='http://api.oconomat.fr/api/menu/'+ idMenu +'/shopping-list';
            axios.get(
            url,
            {
              headers:{
                'Authorization':`bearer ${token}`
            }
          }
          ).then((response1)=>{
            const SessionList = JSON.stringify(response1.data.shoppingList);
            sessionStorage.setItem('SessionList', SessionList);
          var marketList = response1.data.shoppingList;
        if (SessionList !== 'null') {
          setTimeout(function(){
            window.location.reload()
          },0)
        } 
          const action = {
              type:'SHOW_SHOPPINGLIST',
              value: marketList
          }
            dispatch(action);
          })
        

          }).catch((error)=>{
            console.log(error);
            if (error.response.status === 401 ){
              sessionStorage.clear();
              window.location.href = '/signin'
              }
            const action={type:'Set-Shopping-List-Error',value:'Veuillez définir vos objectifs avant d\'accéder à votre liste de course' }
            dispatch(action) 
            
          })

        },

        disconnectUser:()=>{ 
          sessionStorage.clear();
          setTimeout(function(){
            window.location.reload()
          },100)
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
          }).catch((error)=>{ 
            if (error.response.status === 401 ){
              sessionStorage.clear();
              window.location.href = '/signin'
              }
             const action={type:'Set-Recipe-Error-Message',value: 'Veuillez définir vos objectifs avant de consulter vos recettes'};
             dispatch(action)
            
          })
        }
        
      };
    },
  );
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const HeaderSuper = connectionStrategies(HeaderSuperStatic);
  
  // Étape 3 : on exporte le composant connecté qui a été généré
  
export default HeaderSuper;