/* import './style.sass' */
import React from 'react';

import HeaderMyAccount from '../HeaderMyAccount';
import Footer from 'src/components/Footer';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";

/* Import du fichier Sass */
import './style.sass'

const Objectives = () => {
    return (
        <main>
            <div className ="container white">
                
                  <HeaderMyAccount/> 
                  <LinkToUserPage/>
                  <ObjectivesForm />
                  <Footer />
               
            </div>
        </main>
    )
} 

const LinkToUserPage =() => {
  return <div> <Link to="/Account"><button class="btn btn-primary col-md-3 offset-md-5 margin-top"> Retour A Mon Compte </button> </Link> </div>
}

const ObjectivesForm = () => (
    <div>
    
      <h2 className="text-center font-weight-bold text-warning col-md-3 offset-md-5">Mes objectifs</h2>
      <form>
        <div className="form-group row pt-4 col-md-6 offset-md-4">
          <div className="col-sm-10">
            <input type="email" className="form-control form-control-sm" id="colFormLabelLg" placeholder="Votre budget à la semaine en €"/>
            <button className='btn btn-block btn-success mt-4 mb-5'>Valider</button>
          </div> 
        </div>
      </form>
    </div>
)

export default Objectives ;