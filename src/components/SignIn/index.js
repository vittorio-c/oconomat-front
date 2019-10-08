import React from 'react'

import { connect } from 'react-redux';
import  axios  from 'axios';
import { resolve } from 'path';


const TestLog =({submitForm,submitEmail,submitPassword,emailState,passwordState}) => {

    return(
          <div className="Site-content">
              <main className="main">
              <div className ='food-background mt-3'>
              <form action='/' method ='post' className="d-flex flex-column" onSubmit={()=>{submitForm(emailState,passwordState,event)}} >
                  
                  <div className="formBlock">
                  <h2 className="connection-title">Connexion</h2>
                  <div className="form-group mt-4">
                      <input type="email" onChange = {submitEmail} className="form-control rounded-left rounded-right" name='email' placeholder="Your mail here"/>             
                  </div> 
                  <div className="form-group">
                      <input type="password" onChange = {submitPassword} className="form-control rounded-left rounded-right" name='password' placeholder="Your password here"/>
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
      //console.log(state.recipes);
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
          //console.log('hello world');
          var formValues=[emailState,passwordState];
          var formValuesJson=JSON.stringify(formValues);
          
          var formData = new FormData();
         // console.log(emailState.email);
          console.log(passwordState.password);
           formData.set('email',emailState.email)
           formData.set('password',passwordState.password);
          

                // Send a POST request
            axios({
                 method: 'post',
                 url: 'http://api.oconomat.fr/api/login_check',
                 data: {
                   email:emailState.email,
                   password:passwordState.password
                  },
                 headers:{'content-type':'application/json'}
                 
              }).then((response)=>{
                console.log(response);
                const action={type:'Persist-User',value:response.data};
                dispatch(action)
                 sessionStorage.setItem('jwtToken', response.data.payload.token); 
                 sessionStorage.setItem('firstname',response.data.firstname);
                 sessionStorage.setItem('id',response.data.id);

                resolve();
                ownProps.history.push('/Account')
                
              }).catch((error)=>{
                console.log(error)
              }); 
        }
      }
    }
  )
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const TestLogContainer = connectionStrategies(TestLog);
  
  // Étape 3 : on exporte le composant connecté qui a été généré 
  

  export default TestLogContainer; 
       
    
    
    