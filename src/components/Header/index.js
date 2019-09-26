import React from 'react';
import './Header.sass';

const Header =() =>{
    return  <div className="Header">
        <nav className="navbar">
            <a className="navbar-brand">Oconomat</a>
                <button type="button" class="btn btn-sm">Se connecter</button>
                <button type="button" class="btn btn-sm">S'inscrire</button>
                <button type="button" class="btn btn-sm">Contact</button>
        </nav>
    </div> 
    
        
} 
/* informations from Bootstrap's documentation 
https://getbootstrap.com/docs/4.3/components/buttons/
*/
export default Header;



