import React from 'react';
import './HeaderMyAccount.sass';

<<<<<<< HEAD:src/components/Header/index.js
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Header =() =>{
=======
const HeaderMyAccount =() =>{
>>>>>>> 86641baeba52f7ad30ade1ec8fd06b1945992523:src/components/HeaderMyAccount/index.js
    return  <div className="Header">
        <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="/"><img src="src/ressources/pictures/logoOconomat.png" className="img-fluid" alt="Responsive image"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
<<<<<<< HEAD:src/components/Header/index.js
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/SignIn">Se connecter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/SignUp">S'inscrire</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Objectives">Mes objectifs</a>
=======
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Mes objectifs</a>
>>>>>>> 86641baeba52f7ad30ade1ec8fd06b1945992523:src/components/HeaderMyAccount/index.js
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Recipes">Mes recettes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/MarketList">Ma liste de course</a>
                    </li>
<<<<<<< HEAD:src/components/Header/index.js
                    <li className="nav-item">
                        <a className="nav-link" href="#">Deconnexion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
=======
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
>>>>>>> 86641baeba52f7ad30ade1ec8fd06b1945992523:src/components/HeaderMyAccount/index.js
                    </li>
                </ul>
            </div>
        </nav>
    </div>         
} 

/* informations from Bootstrap's documentation 
https://getbootstrap.com/docs/4.3/components/buttons/
*/

export default HeaderMyAccount;



/* <a type ='button' className='btn btn-success' href='/'>Accueil</a> */