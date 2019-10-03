import React from 'react' 
import './SignUp.sass';

import {connect} from 'react-redux';

const InscriptionStatic =({insertInputFirstName,insertInputLastName,insertInputEmail,insertMDP,insertMDPConfirm,onFormSubmitManipulateArray,inputValueFirstName,inputValueLastName,inputValueEmail,inputValueMDP,inputValueConfirmMDP})=>{
  return (
    <body className ="Site">
          <div className="Site-content">
              <main className="main">
                  <InscriptionStaticPage insertInputFirstName={insertInputFirstName} insertInputLastName={insertInputLastName} insertInputEmail={insertInputEmail} insertMDP={insertMDP} insertMDPConfirm={insertMDPConfirm} onFormSubmitManipulateArray={()=>{onFormSubmitManipulateArray(inputValueFirstName,inputValueLastName,inputValueEmail,inputValueMDP,inputValueConfirmMDP, event)}}/>
              </main>
          </div>
      </body>
    )
} 

const InscriptionStaticPage =({insertInputFirstName,insertInputLastName,insertInputEmail,insertMDP,insertMDPConfirm,onFormSubmitManipulateArray}) => {
  return <div className ='food-background mt-3'>
  <form className="d-flex flex-column" onSubmit={onFormSubmitManipulateArray}>
  <div className="formBlock">
          
          <h2 className="inscription-title">Inscription</h2>
              <div className="form-group mt-4">
                <input type="text" onChange={insertInputLastName} className="form-control rounded-left rounded-right" name="lastname" placeholder ='Your lastname'/>
              </div> 
              <div className="form-group">
                <input type="text" onChange={insertInputFirstName}className="form-control rounded-left rounded-right" name="firstname" placeholder ='Your firstname'/>
              </div> 
              <div className="form-group">
                <input type="email" onChange={insertInputEmail} className="form-control rounded-left rounded-right" name="email" placeholder ='Your email'/>
              </div> 
              <div className="form-group">
                <input type="password" onChange={insertMDP} className="form-control rounded-left rounded-right" name="password" placeholder ='Your password'/>
              </div>
              <div className="form-group">
                <input type="password" onChange={insertMDPConfirm} className="form-control rounded-left rounded-right mb-4" name="password-confirm" placeholder ='Confirm your password'/>
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
        inputValueConfirmMDP:state.inputValueConfirmMDP,
        newObj:state.newObj
       
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

       insertMDPConfirm:(event) => { 
        console.log('change detected')
        const action={type:'Insert-Input-MDP-Confirm',value:event.target.value} 
        dispatch(action)
      },
      onFormSubmitManipulateArray:(inputValueFirstName,inputValueLastName,inputValueEmail,inputValueMDP,inputValueConfirmMDP,event) => { 
        event.preventDefault();
        console.log([
          inputValueFirstName,inputValueLastName,inputValueEmail,inputValueMDP,inputValueConfirmMDP
        ])
       
        
       
      },
     
    
      };
    },
  );
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const Inscription = connectionStrategies(InscriptionStatic);


export default Inscription