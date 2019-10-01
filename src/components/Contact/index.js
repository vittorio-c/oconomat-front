/* import './style.sass' */
import React from 'react';
/* Import du fichier Sass */
import './Contact.sass'
import HeaderVisitor from 'src/components/HeaderVisitor';
import Footer from 'src/components/Footer';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";







const Contact = () => {
    return ( 
        <div>
            <header>
                 <HeaderVisitor/>
            </header>
            <main>
            <div className ='contactpage-background'>
                <div className="nomansland">
                <div className="contact-zone">
                    <h1 className="contact-title">Nous contacter</h1>
                    <p className="contact mt-4">contact@Oconomat.fr</p>
                    <p className="contact mt-4">25 avenue du 
                    <br/>General Leclerc
                    <br/>75 008 Paris
                    </p>
                </div>
                </div>
            </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
export default Contact;