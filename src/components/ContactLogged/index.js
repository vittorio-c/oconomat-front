/* import './style.sass' */
import React from 'react';
import HeaderLoggedBackToMyAccountPage from 'src/components/HeaderLoggedBackToMyAccountPage';
import Footer from 'src/components/Footer';

/* Import du fichier Sass */
import './ContactLogged.sass'
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";

// CODE 

const ContactLogged = () => {
    return (
        <body className ="Site">
            <div className="Site-content">
                <div className="App-header">
                    <HeaderLoggedBackToMyAccountPage/>
                </div>
                <main className="main">
                    <ContactLoggedMain/>
                </main>
            </div>
            <Footer />
        </body>
            
    )
} 


// The Contactpage const is called up in the page

const ContactLoggedMain = () => {
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

export default ContactLogged;