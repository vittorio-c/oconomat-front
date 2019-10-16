import React from 'react' 
import './SignUp.sass';
import axios from 'axios'
import {connect} from 'react-redux';

import './SignUp.sass'

const InscriptionStatic =({insertInputFirstName,insertInputLastName,insertInputEmail,insertMDP,insertMDPConfirm,onFormSubmitManipulateArray,inputValueFirstName,inputValueLastName,inputValueEmail,inputValueMDP,inputValueMDPConfirm})=>{
  return (
    
          <div className="Site-content Site">
              <main className="main">
                  <InscriptionStaticPage insertInputFirstName={insertInputFirstName} insertInputLastName={insertInputLastName} insertInputEmail={insertInputEmail} insertMDP={insertMDP} insertMDPConfirm={insertMDPConfirm} onFormSubmitManipulateArray={()=>{onFormSubmitManipulateArray(inputValueFirstName,inputValueLastName,inputValueEmail,inputValueMDP,inputValueMDPConfirm, event)}}/>
              </main>
          </div>
      
    )
} 

const InscriptionStaticPage =({insertInputFirstName,insertInputLastName,insertInputEmail,insertMDP,insertMDPConfirm,onFormSubmitManipulateArray}) => {
  return <div className ='food-background mt-3'>
  <form className="row justify-content-center" onSubmit={onFormSubmitManipulateArray}>
  <div className="container formBlockSignUp">
          <h2 className="inscription-title-signUp">Inscription</h2>
              <div className="form-group mt-4">
                <input type="text" onChange={insertInputLastName} className="form-control rounded-left rounded-right" name="lastname" placeholder ='Nom'/>
              </div> 
              <div className="form-group">
                <input type="text" onChange={insertInputFirstName} className="form-control rounded-left rounded-right" name="firstname" placeholder ='Prenom'/>
              </div> 
              <div className="form-group">
                <input type="email" onChange={insertInputEmail} className="form-control rounded-left rounded-right" name="email" placeholder ='Email'/>
              </div> 
              <div className="form-group">
                <input type="password" onChange={insertMDP} className="form-control rounded-left rounded-right" name="password" placeholder ='Mot de passe'/>
              </div> 

              <div className="form-group">
                <input type="password" onChange={insertMDPConfirm} className="form-control rounded-left rounded-right" name="passwordConfirm" placeholder ='Confirmer mot de passe'/>
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
        inputValues:state.inputValues,
        storedValues: state.storedValues,
        inputValueFirstName:state.inputValueFirstName,
        inputValueLastName:state.inputValueLastName,
        inputValueEmail:state.inputValueEmail,
        inputValueMDP:state.inputValueMDP,
        inputValueMDPConfirm:state.inputValueMDPConfirm
        
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
        insertInputFirstName:(event) => { 
          console.log('change-detected');
          const action={type:'Insert-Input-FirstName',value:event.target.value}
          dispatch(action)
        },
        insertInputLastName :(event) => { 
          console.log('change detected')
          const action={type:'Insert-Input-LastName',value:event.target.value}
          dispatch(action)
       },

        insertInputEmail: (event) => { 
          console.log('change detected')
          const action={type:'Insert-Input-Email',value:event.target.value} 
          dispatch(action)
       },

        insertMDP:(event) => { 
          console.log('change detected')
          const action={type:'Insert-Input-MDP',value:event.target.value} 
          dispatch(action)
       },
        insertMDPConfirm:(event) =>{
          const action={type:'Confirm-Input-MDP',value:event.target.value}
          dispatch(action);
       },
       
// var inputValues = new FormData();
      
      onFormSubmitManipulateArray:(inputValueFirstName,inputValueLastName,inputValueEmail,inputValueMDP,inputValueMDPConfirm,event) => { 
        event.preventDefault();
        var inputValues=[inputValueFirstName,inputValueLastName,inputValueEmail,inputValueMDP,inputValueMDPConfirm];
       
        var stringifyInput=JSON.stringify(inputValues);
        var formData= new FormData();
        console.log('hello world')
        formData.set('firstname',inputValueFirstName.firstname);
        formData.set('lastname',inputValueLastName.lastname);
        formData.set('email',inputValueEmail.email);
        formData.set('password',inputValueMDP.password);
        formData.set('passwordConfirm',inputValueMDPConfirm.passwordConfirm)
       

        axios({
          method: 'post',
          url: 'https://api.oconomat.fr/api/register',
          data: formData
        
        }).then((response)=>{
          //On traite la suite une fois la réponse obtenue 
          console.log('hello world')
          console.log('la soumission a bien abouti')
          console.log(response)
          const Swal = require('sweetalert2')
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Inscription validée',
            showConfirmButton: false,
            timer: 2000
          })

        const action={type:'Show-Message-SignUp',value:'Merci De Votre Inscription, veuillez bien vous connecter et definir vos objectifs pour recevoir vos recettes!'}
          dispatch(action);
          ownProps.history.push('/')
        
        }).catch((error)=>{
          //On traite ici les erreurs éventuellement survenues
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: "Une erreur s'est produite",
          })
          console.log('failure')
          console.log(error);
          });
        
      },
     
      };
    },
  );
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const Inscription = connectionStrategies(InscriptionStatic);


export default Inscription