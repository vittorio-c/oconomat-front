import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './HeaderVisitor.sass';

const HeaderVisitor =() =>{
    return  <div className="Header">
        <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/"><a className="navbar-brand"><img src="src/ressources/pictures/logoOconomat.png" className="img-fluid" alt="Responsive image"></img></a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/SignIn"><a className="nav-link">Se connecter</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/SignUp"><a className="nav-link">S'inscrire</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact"><a className="nav-link">Contact</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>         
} 
/* informations from Bootstrap's documentation 
https://getbootstrap.com/docs/4.3/components/buttons/
*/
export default HeaderVisitor;