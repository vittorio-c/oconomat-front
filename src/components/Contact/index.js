/* import './style.sass' */
import React from 'react';
/* Import du fichier Sass */
import './Contact.sass'
import HeaderBackToHomePage from '../HeaderBackToHomePage';
import HeaderVisitor from 'src/components/HeaderVisitor';
import Footer from 'src/components/Footer';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";


//import HeaderBackToHomePage from '../HeaderBackToHomePage';
//import Footer from 'src/components/Footer';





const Contact = () => {
    return ( 
        <div>
          <header>
              <HeaderVisitor/>
          </header>
          <RetourAccueil/>
          <main>
            <div className ='Contact-background mt-3'>
            <div className="ContactBlock">
                    <h2>Nous Contacter</h2>
                    <div className="contact-box">
                        <h4>
                            contact@Oconomat.com
                        </h4>
                        <h4>
                            Oconomat <br/>
                            23 rue du General Leclerc <br/>
                            75 008 Paris <br/>
                        </h4> 
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </div>
    )
}

const RetourAccueil = () => {
    return (<Link to="/"><button class="btn btn-primary col-md-3 offset-md-5"> Retour A l'accueil </button></Link>)
}

export default Contact;