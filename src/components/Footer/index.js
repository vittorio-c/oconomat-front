import React from 'react';
import './Footer.sass';

const Footer =() =>{
    return <div className="footer sticky-bottom"> 

       
            <div className="row ">
                 <div className="col-xs-6 col-sm-6 text-center col-lg-3"> Conditions Generales</div> 
                 <div className="col-xs-6 col-sm-6 text-center col-lg-3"> Cookies</div>
                 <div className="col-xs-6 col-sm-6 text-center col-lg-3"> Politique de Confidentialité</div>
                 <div className="col-xs-6 col-sm-6 text-center col-lg-3"> <a href="/Contact">Contact</a></div>
           </div> 

    </div> 
} 

export default Footer;