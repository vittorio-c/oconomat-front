import React from 'react';
import HeaderBackToHomePage from '../HeaderBackToHomePage/index.js';
import Recipe from '../Recipe/index.js';
import Footer from '../Footer/index.js';




// Styles and assets

import './app.sass'; 







const AppContainer=() =>{
    return (<div id="app"> <HeaderBackToHomePage/> <Recipe/>
    <Footer/> </div>)
}

export default AppContainer;

