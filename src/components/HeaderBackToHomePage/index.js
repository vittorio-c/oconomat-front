import React from 'react';
import './HeaderBackToHomePage.sass';

const HeaderBackToHomePage =() =>{
    return  <div className="Header">
        <nav className="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="#"><img src="src/ressources/pictures/logoOconomat.png" className="img-fluid" alt="Responsive image"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Accueil</a>
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



