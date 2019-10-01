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
            <div className ='contact-background'>
            <h2>lol</h2>
            <h2>lol</h2>
            <h2>lol</h2>
            <h2>lol</h2>
            <h2>lol</h2>
            <h2>lol</h2>
            <h2>lol</h2>
            <h2>lol</h2>
            <h2>lol</h2>
            <h2>lol</h2>
            </div>
            </main>
            <footer>
                <Footer/>
            </footer>
         </div>
    )
}
/*
const RetourAccueil = () => {
    return (<Link to="/"><button class="btn btn-primary col-md-3 offset-md-5"> Retour A l'accueil </button></Link>)
}
*/
export default Contact;