/* import './style.sass' */
import React from 'react';
import HeaderBackToHomePage from 'src/components/HeaderBackToHomePage';
import Footer from 'src/components/Footer';

/* Import du fichier Sass */
import './Contact.sass'
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";

// CODE 

const Contact = () => {
    return (
        <body className ="Site">
            <div className="Site-content">
                <div className="App-header">
                    <HeaderBackToHomePage/>
                </div>
                <main className="main">
                    <Contactpage/>
                </main>
            </div>
            <Footer />
        </body>
            
    )
} 


// The Contactpage const is called up in the page

const Contactpage = () => {
    return <div className ='contactpage-background'>
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
}

export default Contact;