import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";






// Styles and assets

import './app.sass'; 
import Header from '../Header/index.js';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Recipes from 'src/components/Recipes';
import MarketList from 'src/components/MarketList'
import Objectives from 'src/components/Objectives';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';


const AppContainer=() =>{
    return (
        <div id="app">
         <Recipes />
        </div>)
}

export default AppContainer;

