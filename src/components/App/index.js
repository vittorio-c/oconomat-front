import React from 'react';
import HeaderVisitor from '../HeaderVisitor/index.js';
import Inscription from '../SignUp/index.js'
import Connexion from '../SignIn/index.js';
import Recettes from '../Recettes/index.js';
import Footer from '../Footer/index.js';




// Styles and assets

import './app.sass'; 




const AppContainer=() =>{
    return (<div id="app"> <HeaderVisitor/> <Connexion/> <Inscription/> <Recettes/>
    <Footer/> </div>)
}

export default AppContainer;

