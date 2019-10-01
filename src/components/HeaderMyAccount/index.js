import React from 'react';
import './HeaderMyAccount.sass';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const HeaderMyAccount =() =>{
    return  <div className="Header">
        <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="/Account"><img src="src/ressources/pictures/logoOconomat.png" className="img-fluid" alt="Responsive image"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/Objectives">Mes objectifs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Recipes">Mes recettes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/MarketList">Ma liste de course</a>
                    </li>
                    <li className="nav-item">
                       <Link to="/"> <a className="nav-link" href="#">Deconnexion</a> </Link> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Contact">Contact</a>
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