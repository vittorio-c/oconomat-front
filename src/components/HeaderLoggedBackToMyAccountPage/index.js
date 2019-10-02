import React from 'react';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";
import './HeaderLoggedBackToMyAccountPage.sass';

const HeaderLoggedBackToMyAccountPage =() =>{
    return  <div className="Header">
        <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/Account"><a className="navbar-brand"><img src="src/ressources/pictures/logoOconomat.png" className="img-fluid" alt="Responsive image"></img></a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/Account"><a className="nav-link">Mon compte</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>         
} 

/* informations from Bootstrap's documentation 
https://getbootstrap.com/docs/4.3/components/buttons/
*/

export default HeaderLoggedBackToMyAccountPage;