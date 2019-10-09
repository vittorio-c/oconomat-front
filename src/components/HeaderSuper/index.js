import React from 'react';
import { Button,Nav,Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route,Switch,Link,Redirect} from "react-router-dom";
import axios from 'axios'
import './HeaderSuper.sass';


const HeaderSuperStatic =({getRecipes,disconnectUser}) => {

    if (sessionStorage.jwtToken === '' || sessionStorage.jwtToken === undefined ){
     
        return <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Oconomat</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/"> <nav> <a className="nav-link"> Accueil</a> </nav> </Link>
            </li>
            <li className="nav-item">
                <Link to="/ContactLogged"> <nav><a className="nav-link">Contact</a> </nav></Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <Link to="/SignUp"> <nav> <button class="btn btn-outline-success my-2 my-sm-0"> Inscription </button> </nav></Link>
            <Link to="/SignIn"> <nav> <button class="btn btn-outline-success my-2 my-sm-0"> Connexion </button> </nav></Link>
          </form>
        </div>
      </nav>  

    } else
    return <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Oconomat</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to="/"> <nav> <a className="nav-link"> Accueil</a> </nav> </Link>
        </li>
        <li className="nav-item">
            <Link to="/ContactLogged"> <nav><a className="nav-link">Contact</a> </nav></Link>
        </li>
        <li className="nav-item">
        <Link to="/Objectives"> <nav> <a className="nav-link btn btn-default">Mes objectifs</a> </nav> </Link>
        </li>
        <li className="nav-item">
            <Link to="/Recipes"> <nav> <a onClick={getRecipes} className="nav-link btn btn-default" >  Mes recettes </a> </nav> </Link> 
        </li>
        <li className="nav-item">
        <Link to="/MarketList"> <nav><a className="nav-link "> Ma liste de course </a> </nav> </Link>
        </li>
        <li className="nav-item">
            <Link to="/account"> <nav><a className="nav-link btn btn-default"> Mon Compte </a>  </nav></Link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
      <Link to="/"> <nav><a className="nav-link btn btn-default"> <button class="btn btn-outline-danger my-2 my-sm-0" onClick={disconnectUser}> Deconnexion </button> </a> </nav> </Link> 
        
      </form>
    </div>
  </nav>    
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