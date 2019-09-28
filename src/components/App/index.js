import React from 'react';

import Header from '../HeaderBackToHomePage/index.js';
import Recipe from '../Recipe/index.js';
import Footer from '../Footer/index.js';



// Styles and assets

import './app.sass'; 






const AppContainer=() =>{
    return (<div id="app"> <Header/> <Recipe/>
    <Footer/> </div>)
}

export default AppContainer;

