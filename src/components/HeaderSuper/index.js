import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './HeaderSuper.sass';

const HeaderSuper =() =>{
    return  <div className="Header">
        <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/"><a className="navbar-brand"><img src="src/ressources/pictures/logoOconomat.png" className="img-fluid" alt="Responsive image"></img></a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/"><a className="nav-link">Accueil</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Account"><a className="nav-link">Mon compte</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Objectives"><a className="nav-link">Mes objetcifs</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Recipes"><a className="nav-link">Mes recettes</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/MarketList"><a className="nav-link">Ma liste de course</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Recipe"><a className="nav-link">Recette</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/"><a className="nav-link">Deconnexion</a></Link>
                    </li>
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>         
} 
/* informations from Bootstrap's documentation 
https://getbootstrap.com/docs/4.3/components/buttons/
*/
export default HeaderSuper;