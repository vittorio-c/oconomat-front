import React from 'react';
import { Button,Nav,Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route,Switch,Link,Redirect} from "react-router-dom";
import axios from 'axios'
import './HeaderSuper.sass';


const HeaderSuperStatic =({getRecipes,helloWorld,disconnectUser}) => {

    if (sessionStorage.jwtToken === ''){
     
        return  <div className="app">
        <nav className="navbar navbar-expand-md navbar-light background-img nav-height">
            <Link to="/Account"><a className="navbar-brand"><img src="src/ressources/pictures/logoOconomat.png" className="img-fluid d-sm-none d-md-block" alt="Responsive image"></img></a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse margin-bottom" id="navbarNav">
                <ul className="navbar-nav"> 
                    <li className="nav-item">
                        <Link to="/"> <nav> <a className="nav-link btn btn-default"> <button class="btn btn-small btn-info"> Accueil </button></a> </nav> </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/ContactLogged"> <nav><a className="nav-link btn btn-default"> <button class="btn btn-small btn-info"> Contact </button> </a> </nav></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/SignIn"> <nav><a className="nav-link btn btn-default"> <button class="btn btn-small btn-info">  Connexion </button> </a> </nav></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/SignUp"> <nav><a className="nav-link btn btn-default"> <button class="btn btn-small btn-info"> Inscription </button> </a> </nav> </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>   

    } else
    return  <div className="app">
        <nav className="navbar navbar-expand-md navbar-light background-img nav-height">
            <Link to="/Account"><a className="navbar-brand"><img src="src/ressources/pictures/logoOconomat.png" className="img-fluid d-sm-none d-md-block" alt="Responsive image"></img></a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse margin-bottom" id="navbarNav">
                <ul className="navbar-nav"> 
                    <li className="nav-item">
                        <Link to="/"> <nav> <a className="nav-link btn btn-default"> <button class="btn btn-small btn-info"> Accueil </button></a> </nav> </Link>
                    </li>
                 
                    <li className="nav-item">
                        <Link to="/Objectives"> <nav> <a className="nav-link btn btn-default"> <button class="btn btn-small btn-info"> Mes objectifs </button></a> </nav> </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Recipes"> <nav> <a className="nav-link btn btn-default" > <button class="btn btn-small btn-info" onClick={getRecipes}> Mes recettes </button> </a> </nav> </Link> 
                    </li>
                    <li className="nav-item">
                       <Link to="/MarketList"> <nav><a className="nav-link btn btn-default"> <button class="btn btn-small btn-info"> Ma liste de course</button> </a> </nav> </Link>
                    </li>
                    <li className="nav-item">
                       <Link to="/"> <nav><a className="nav-link btn btn-default"> <button class="btn btn-small btn-info" onClick={disconnectUser}> Deconnexion </button> </a> </nav> </Link> 
                    </li> 
                    <li className="nav-item">
                        <Link to="/account"> <nav><a className="nav-link btn btn-default"> <button class="btn btn-small btn-info"> Mon Compte </button>  </a>  </nav></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ContactLogged"> <nav><a className="nav-link btn btn-default"> <button class="btn btn-small btn-info"> Contact </button> </a> </nav></Link>
                    </li>
                </ul>
            </div>
        </nav>
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