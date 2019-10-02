/* import './style.sass' */
import React from 'react';

import HeaderMyAccount from '../HeaderMyAccount';
import Footer from 'src/components/Footer';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";

/* Import du fichier Sass */
import './Objectives.sass'

const Objectives = () => {
    return (
        <body className ="Site">
                <div className="Site-content">
                    <div className="App-header">
                        <HeaderMyAccount/>
                    </div>
                    <main className="main">
                        <ObjectivesForm />
                    </main>
                </div>
                <Footer />
            </body>
        
    )
} 

const ObjectivesForm = () => (
    <div>
    <h2 className="objectives-title">Mes objectifs</h2> 
      <form className="form-space">
      <input type="email" className="form-control form-control-sm" id="colFormLabelLg" placeholder="Votre budget à la semaine en €"/>
          <div className="button-box">
              <button className="objectives-validation btn btn-md mt-3 center-block" type="submit">Valider</button>
          </div>
      </form>
    </div>
)

export default Objectives ;