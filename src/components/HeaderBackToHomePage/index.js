import React from 'react';
import './HeaderBackToHomePage.sass';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";

const HeaderBackToHomePage =() =>{
    return  <div className="Header">
        <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/"><a className="navbar-brand"><img src="src/ressources/pictures/logoOconomat.png" className="img-fluid" alt="Responsive image"></img></a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/Account"><a className="nav-link">Retour a mon Profil </a> </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>         
} 

/* informations from Bootstrap's documentation 
https://getbootstrap.com/docs/4.3/components/buttons/
*/

export default HeaderBackToHomePage;



