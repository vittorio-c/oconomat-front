import React from 'react';

import Header from '../HeaderBackToHomePage/index.js';
import Contact from '../Contact/index.js';




// Styles and assets

import './app.sass'; 
import Footer from '../Footer/index.js';





const AppContainer=() =>{
    return (<div id="app"> <Header/> <Contact/>
    <Footer/> </div>)
}

export default AppContainer;

