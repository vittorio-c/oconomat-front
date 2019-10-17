import React from 'react' 
import axios from 'axios'
import { connect } from 'react-redux';

import './ForgottenPassword.sass';

const ForgottenPassword =({insertInputEmail,inputValueEmail,validRestart})=>{

  return (
    
          <div className="Site-content Site">
              <main className="main">
              <div className ='food-background mt-3'>
              <form className="d-flex flex-column"  >
                  <div className="formBlock">
                      <h2 className="inscription-title">Mot de passe oublié</h2>
                      <div className="form-group mt-4">
                          <div className="form-group">
                          <input onChange={insertInputEmail} type="email" className="form-control rounded-left rounded-right" name="email" placeholder ='Votre email'/>
                          </div> 
                          <div className="information">
                              <p>
                                  Vous allez recevoir votre nouveau mot de passe.<br/>
                                  N'oubliez pas de verifier vos spams.
                              </p>
                          </div>
                          <button className="validation btn" onClick={()=>{validRestart(inputValueEmail,event)}}>Envoyer</button>
                      </div>
                   </div>
              </form>      
          </div>
 
              </main>
          </div>
      
    )
} 

const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state) => { 
      return {
        letters: state.letters,
        inputValues:state.inputValues,
        storedValues: state.storedValues,
        inputValueEmail:state.inputValueEmail,
      }
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch,inputValueEmail) => {
      return {
        insertInputEmail: (event) => { 
          const action={type:'Insert-Input-Email',value:event.target.value} 
          dispatch(action)
        },
      validRestart:(inputValueEmail,event) => { 
        event.preventDefault();
        var inputValues= inputValueEmail;
        var stringifyInput=JSON.stringify(inputValues);
        var formData= new FormData();
        formData.set('email',inputValueEmail.email);
        axios({
          method: 'post',
          url: 'http://api.oconomat.fr/api/password/new',
          data: formData
        })
        .then(function (response) {
          //On traite la suite une fois la réponse obtenue 
          // We are tying to bring an Alert when the ResetPassword Worked
          const Swal = require('sweetalert2')
          Swal.fire({
            type: 'success',
            title: 'Votre mot de passe temporaire a été envoyé ',
            showConfirmButton: false,
            timer: 3000
          })
          
        }).catch((error)=>{
          //On traite ici les erreurs éventuellement survenues
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: "Votre email n'est pas valide, veuillez recommencer.",
          })
          console.log('failure')
          console.log(error);
      });
      },
     };
    },
  );
  
  const ForgottenPasswordContainer = connectionStrategies(ForgottenPassword);
  
  

  

export default ForgottenPasswordContainer