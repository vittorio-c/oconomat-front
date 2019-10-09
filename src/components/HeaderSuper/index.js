import React from 'react';
import { Button,Nav,Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route,Switch,Link,Redirect} from "react-router-dom";
import axios from 'axios'
import './HeaderSuper.sass';
/* onClick={() =>{document.location.reload() } } */

const HeaderSuperStatic =({getRecipes,disconnectUser}) => {

    if (sessionStorage.jwtToken === '' || sessionStorage.jwtToken === undefined ){
     
        return <div class="sticky-top d-flex justify-content-around navbar-dark bg-dark ">
            
            <Link to="/">  <button className=" btn fa fa-home fa-2x my-1"></button>  </Link>
            <Link to="/Contact"> <button className="btn fa fa-phone fa-2x my-1"> </button></Link>
            <Link to="/SignUp"> <button class="btn fa fa-file-signature fa-2x my-1"></button></Link>
            <Link to="/SignIn">  <button class="btn fa fa-plug fa-2x my-1"> </button></Link>
      </div>  

    } else
    return <div class="sticky-top d-flex justify-content-around navbar-dark bg-dark">

    <Link to="/"><button className="btn fa fa-home my-1"></button></Link>
    <Link to="/Contact"> <button className="btn fa fa-phone my-1"></button></Link>
    <Link to="/Objectives"> <button class="btn fa fa-bullseye my-1"> </button></Link>

    <Link to="/Recipes"> <button onClick={getRecipes} class="btn fa fa-book-open my-1"> </button> </Link> 
    <Link to="/MarketList"> <button class="btn fa fa-shopping-cart my-1"> </button></Link>
    <Link to="/account"> <button class="btn fa fa-cogs my-1"> </button></Link>
    <Link to="/"> <button onClick={disconnectUser} class="bg-danger btn fa fa-times-circle my-1"> </button> </Link> 
   </div>
    {/*}

        <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Oconomat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav navbar-expand-xl" />
        <Navbar.Collapse id="basic-navbar-nav" className ='clearfix'>
    
            <Nav  className="mr-auto">
                <Nav.Link href="/">Accueil</Nav.Link>
                <Nav.Link href="/account">Mon compte</Nav.Link>
                <Nav.Link href="/objectives">Mes objectifs </Nav.Link>
                <Nav.Link href="/Recipes"> Mes Recettes  </Nav.Link>
                <Nav.Link href="/MarketList">Ma liste de course</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link> 
                
                <div  className ='btn-group text-center align-bottom float-right'>
                        <Nav.Link href="/signup"><Button className='btn btn-sm' variant="outline-success">Inscription</Button></Nav.Link>
                        <Nav.Link href="/signin"><Button className='btn btn-sm' variant="outline-success">Connexion</Button></Nav.Link>
                        <Nav.Link href="/"><Button className='btn btn-sm' variant="outline-danger" onClick={disconnectUser}>Déconnexion</Button></Nav.Link> 
                        
                       
                        
                </div>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
      */} 





          
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
            sessionStorage.setItem('firstname','');
            sessionStorage.setItem('id','');
            sessionStorage.setItem('jwtToken','');
               
        },
        
        helloWorld:() => { 
            
            console.log(sessionStorage.getItem('id'))
            
        },
       
        getRecipes:(event) => { 
          
          console.log('get recipes')
          var token=sessionStorage.getItem('jwtToken')
          var url ='http://api.oconomat.fr/api/menu/user/last';
          axios.get(url,{headers:{'Authorization':`bearer ${token}`}}).then((response)=>{
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