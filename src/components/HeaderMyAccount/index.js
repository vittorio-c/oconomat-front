import React from 'react';
import './HeaderMyAccount.sass';

const HeaderMyAccount =() =>{
    return  <div className="Header">
        <nav className="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="#"><img src="src/ressources/pictures/logoOconomat.png" className="img-fluid" alt="Responsive image"></img></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Mes objectifs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Mes recettes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Ma liste de course</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
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



