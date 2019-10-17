import React from 'react';
import './Footer.sass';

const Footer =() =>{
    return <div className="footer sticky-bottom p-0"> 

            <div className="row m-0">
                <div className="row col-12 m-0 py-2">
                    <div className="col-xs-6 col-sm-6 text-center col-lg-3"> Conditions générales</div> 
                    <div className="col-xs-6 col-sm-6 text-center col-lg-3"> Cookies</div>
                    <div className="col-xs-6 col-sm-6 text-center col-lg-3"> Politique de Confidentialité</div>
                    <div className="col-xs-6 col-sm-6 text-center col-lg-3"> <a href="/Contact">Contact</a></div>
                </div>
                 <div className="green-footer p-1">
                    <img className="logo-white" src="src/ressources/pictures/logo_oconomat_white.png"></img>
                 </div>
           </div> 
    </div> 
} 

export default Footer;