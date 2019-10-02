import React from 'react';
import './HeaderVisitor.sass';

const HeaderVisitor =() =>{
    return  <div className="Header">
        <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="/home"><img src="src/ressources/pictures/logoOconomat.png" className="img-fluid" alt="Responsive image"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="signin">Se connecter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/signup">S'inscrire</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
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