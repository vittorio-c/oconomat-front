import React from 'react'
import { connect } from 'react-redux';
import  axios  from 'axios';
import { resolve } from 'path';
import Swal from 'sweetalert2';

import './SignIn.sass'

const SignIn =({submitForm,submitEmail,submitPassword,emailState,passwordState}) => {

    return(
          <div className="Site-content">
              <main className="main">
              <div className ='food-background'>
              <form action='/Account' method ='post' className="row justify-content-center my-0" onSubmit={()=>{submitForm(emailState,passwordState,event)}} >
                  
                  <div className="container formBlockSignIn">
                    <h2 className="connection-title">Connexion</h2>
                    <div className="form-group mt-4">
                        <input type="email" onChange = {submitEmail} className=" form-control rounded-left rounded-right" name='email' placeholder="Votre email"/>             
                    </div> 
                    <div className="form-group">
                        <input type="password" onChange = {submitPassword} className="form-control rounded-left rounded-right" name='password' placeholder="Votre mot de passe"/>
                    </div> 
                    <div className="forgotten-password">
                      <a href="/ForgottenPassword">Mot de passe oublié </a>
                    </div>
                    <button className="validation btn btn-lg" type="submit" >Envoyer</button>
                  </div>
              </form> 
              </div>
              </main>
          </div>
   )
} 


const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => { 
      return {
        emailState:state.emailState,
        passwordState:state.passwordState,
        currentUser:state.currentUser
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch,ownProps) => {
      return {
        submitEmail:(event) => {
          event.preventDefault();
          const action = {
            type:'ENTER_EMAIL',
            value : event.target.value
          };
          dispatch(action);
        },
          submitPassword:(event) =>{
          event.preventDefault();  
          const action={
              type:'ENTER_PASSWORD',
              value: event.target.value
            };
 
            dispatch(action);
        },
        submitForm:(emailState,passwordState,event) =>{
           event.preventDefault();  

            axios({
                 method: 'post',
                 url: 'http://api.oconomat.fr/api/login_check',
                 data: {
                   email:emailState.email,
                   password:passwordState.password
                  },       
              }).then((response)=>{

                const Swal = require('sweetalert2')
                Swal.fire({
                  type: 'success',
                  title: 'Connexion',
                  showConfirmButton: false,
                  timer: 2000
                })
                const action={type:'Persist-User',value:response.data};
                  dispatch(action)
                  sessionStorage.setItem('jwtToken', response.data.payload.token);
                  sessionStorage.setItem('firstname',response.data.firstname);
                  sessionStorage.setItem('lastname',response.data.lastname);
                  sessionStorage.setItem('id',response.data.id);
                  sessionStorage.setItem('userQuantity',response.data.userQuantity);
                  sessionStorage.setItem('budget',response.data.budget);
                  ownProps.history.push('/dashboard');
                  document.location.reload(); 
              }).catch((error)=>{
                Swal.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: "Une erreur s'est produite",
                })
                if (error.response.status === 401 ){
                  sessionStorage.clear();
                  window.location.href = '/signin'
                  }
              })
        },
      }
    }
  )
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const SignInContainer = connectionStrategies(SignIn);
  
  // Étape 3 : on exporte le composant connecté qui a été généré 
  

  export default SignInContainer; 
       
    
    
    