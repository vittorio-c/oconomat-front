import React from 'react' 
import './SignUp.sass';

import {connect} from 'react-redux';

const InscriptionStatic =({testSubmit})=>{
  return (
    <body className ="Site">
          <div className="Site-content">
              <main className="main">
                  <InscriptionStaticPage testSubmit={testSubmit}/>
              </main>
          </div>
      </body>
    )
} 

const InscriptionStaticPage =({testSubmit}) => {
  return <div className ='food-background mt-3'>
  <form className="d-flex flex-column" onSubmit={testSubmit}>
  <div className="formBlock">
          
          <h2 className="inscription-title">Inscription</h2>
              <div className="form-group mt-4">
                <input type="text" className="form-control rounded-left rounded-right" name="lastname" placeholder ='Your lastname'/>
              </div> 
              <div className="form-group">
                <input type="text" className="form-control rounded-left rounded-right" name="firstname" placeholder ='Your firstname'/>
              </div> 
              <div className="form-group">
                <input type="email" className="form-control rounded-left rounded-right" name="email" placeholder ='Your email'/>
              </div> 
              <div className="form-group">
                <input type="password" className="form-control rounded-left rounded-right" name="email" placeholder ='Your password'/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control rounded-left rounded-right mb-4" name="email" placeholder ='Confirm your password'/>
              </div>
              <button className="validation btn" type="submit">Envoyer</button>
              </div>
          </form> 
          
  </div>
}






const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => { 
      
      return {
        letters: state.letters,
        storedValues: state.storedValues
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
       testSubmit:(event) =>{
           event.preventDefault(); 
           ownProps.history.push('/Objectives');
                 
       },
      };
    },
  );
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const Inscription = connectionStrategies(InscriptionStatic);


export default Inscription