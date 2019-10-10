import React from 'react' 
import './ForgottenPassword.sass';
import axios from 'axios'

import {connect} from 'react-redux';

const ForgottenPassword =({insertInputEmail,inputValueEmail})=>{
  return (
    
          <div className="Site-content Site">
              <main className="main">
                  <ForgottenPasswordStaticPage  insertInputEmail={insertInputEmail}  onFormSubmitManipulateArray={()=>{onFormSubmitManipulateArray(inputValueEmail, event)}}/>
              </main>
          </div>
      
    )
} 

const ForgottenPasswordStaticPage =({insertInputEmail,onFormSubmitManipulateArray}) => {
  return <div className ='food-background mt-3'>
    <form className="d-flex flex-column" onSubmit={onFormSubmitManipulateArray}>
        <div className="formBlock">
            <h2 className="inscription-title">Mot de passe oublié</h2>
            <div className="form-group mt-4">
                <div className="form-group">
                <input type="email" onChange={insertInputEmail} className="form-control rounded-left rounded-right" name="email" placeholder ='Votre email'/>
                </div> 
                <div className="information">
                    <p>
                        Vous allez recevoir votre nouveau mot de passe.<br/>
                        N'oubliez pas de verifier vos spams.
                    </p>
                </div>
                <button className="validation btn" type="submit" href="/PasswordSend">Envoyer</button>
            </div>
         </div>
    </form>      
</div>
}






const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => { 
   
      return {
        letters: state.letters,
        inputValues:state.inputValues,
        storedValues: state.storedValues,
        inputValueEmail:state.inputValueEmail,
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
       insertInputEmail: (event) => { 
         console.log('change detected')
         const action={type:'Insert-Input-Email',value:event.target.value} 
         dispatch(action)
       },
       
// var inputValues = new FormData();
      
      onFormSubmitManipulateArray:(inputValueEmail,event) => { 
        event.preventDefault();
        var inputValues= inputValueEmail;
       
        var stringifyInput=JSON.stringify(inputValues);
        var formData= new FormData();
        console.log('hello world')
        formData.set('email',inputValueEmail.email);
       

        axios({
          method: 'post',
          url: 'http://api.oconomat.fr/api/password/new',
          data: formData
      })
      .then(function (response) {
          //On traite la suite une fois la réponse obtenue 
          console.log('hello world')
          console.log(response)
          
      })
      .catch(function (erreur) {
          //On traite ici les erreurs éventuellement survenues
          console.log(erreur);
      });
      },
     };
    },
  );
  
  

export default ForgottenPassword