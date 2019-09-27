import React from 'react';

import Header from '../HeaderVisitor/index.js';




// Styles and assets

import './app.sass'; 
import Footer from '../Footer/index.js';
import Inscription from '../SignUp/index.js'
import Connexion from '../SignIn/index.js';
import Recettes from '../Recettes/index.js';



const AppContainer=() =>{
    return (<div id="app"> <Header/> <Connexion/> <Inscription/> <Recettes/>
    <Footer/> </div>)
}

export default AppContainer;

