/* import './style.sass' */
import React from 'react';
import {connect} from 'react-redux';
import  axios  from 'axios';

import './style.sass';

const DashBoard= ({isCheck,isCheckbox,submitNewPassword,newPassword,password,typeOldPassword,typeNewPassword,submitObjectives,objectivesInputUpdate,objectives,currentUser,budgetError,messages}) => {
    return (
            <main>
                <div className="Site-content">
                    <main className="main">
                        <AccountInfo isCheck={isCheck} isCheckbox ={isCheckbox} submitNewPassword={submitNewPassword} newPassword = {newPassword} password= {password} typeOldPassword= {typeOldPassword} typeNewPassword= {typeNewPassword} submitObjectives = {submitObjectives} objectivesInputUpdate = {objectivesInputUpdate}objectives ={objectives} messages={messages}/>
                    </main>
                </div>
            </main>

  
           
        
    )
}

const AccountInfo = ({isCheck,isCheckbox,submitNewPassword,newPassword,password,typeOldPassword,typeNewPassword,submitObjectives,objectivesInputUpdate,objectives,budgetError,messages}) => ( 

    <div className="AccountInfoMain"> 
    <h2 className="objectives-title text-center">Tableau de bord</h2> 
    

      <div className="AccountBackground">
        <form>
          <div className="Account-info row pt-4">
            <div className="col-lg-10 container pl-0">
              <div className = 'container '>
                <img src ='src/ressources/pictures/cookingmama.png' className ='avatar-img img-thumbnail max-width:10%'></img>
              </div>
              <p className='user mt-2 mb-2 text-center'><span> {sessionStorage.getItem('firstname')} </span> </p>
              <p className='user mt-2 mb-2 text-center'><span> {sessionStorage.getItem('lastname')} </span> </p>
              <p className='password mb-2 text-center'>Password : <span>*********</span></p>
              <p className ='objectif mb-2 text-center'>Objectif : <span> {sessionStorage.getItem('budget') === 'null' ? 0 : sessionStorage.getItem('budget') } € </span></p>

              <div className="text-center">
                <a href="" className="btn-password btn-default btn" data-toggle="modal" data-target="#darkModalForm">Changer de mot de passe</a>
              </div>
              <div className="modal fade" id="darkModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog form-dark" role="document">
                  
                  <div className="modal-content card card-image">
                    <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                      
                            <div className="modal-header text-center pb-4">
                              <h3 className="modal-title w-100 white-text font-weight-bold" id="myModalLabel"><strong>Changer de </strong> 
                              <a className="Up font-weight-bold"><strong> mot de passe</strong>
                              </a>
                              </h3>
                              <button type="button" className="close white-text" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                    
                      <div className="modal-body">

                        <div className="md-form mb-5">
                          <input onChange = {typeOldPassword} type="password" id="Form-pass5" className="form-control validate white-text" placeholder="Mot de passe actuel" />
                          <label data-error="wrong" data-success="right" for="Form-pass5"></label>
                        </div>

                        <div className="md-form pb-3">
                          <input onChange = {typeNewPassword} type="password" id="Form-newpass5" className="form-control validate white-text" placeholder="Nouveau mot de passe" />
                          <label data-error="wrong" data-success="right" for="Form-newpass5"></label>
                        </div>

                        <div className="row d-flex align-items-center mb-4">

                          <div className="text-center mb-3 col-md-12">
                            <button type="button" className="btn-submit-password btn-success btn-block btn-rounded z-depth-1" onClick={() =>{submitNewPassword(password,newPassword,event)}}>{password !== newPassword ? 'Valider' : 'Error'}</button>
                           </div>

                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              
              

              <button type="button" class="btn btn-primary text-center" data-toggle="modal" data-target="#exampleModal">
              { sessionStorage.getItem('budget') !== null || sessionStorage.getItem('budget') !== '' ? 'Modifier vos objectifs' : 'Saisir votre premier objectif'}
              </button>
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content"> 
                  
                  
                   {messages.budgetError!='' ? <div class="alert alert-danger" role="alert"> {messages.budgetError} </div> : <span> </span>}
                    <div class="modal-header"> 
                    
                      <h5 class="modal-title" id="exampleModalLabel">Modifier vos objectifs</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form>
                      <input onChange = {objectivesInputUpdate}  type="number" className="form-control form-control-sm" id="colFormLabelLg" placeholder="Inserez votre nouveau budget"/>
                      <div className = "text-left text-secondary mt-5">Vos préférences alimentaires</div>
                      <div className = "text-left text-success my-2"><input type="checkbox" aria-label="vegetarian checkbox" className = "" onChange = {() => {isCheckbox(isCheck,event)}}/>Végétarien </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                      { objectives >0 ? <button type="button" onClick = {() => {submitObjectives(isCheck,event)}} onSubmit = {() => {submitObjectives(isCheck,event)}} className="btn btn-success" type="submit"> Valider {objectives} { objectives >0 ? ' € ?' : '' } </button> : '' }
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </form>
      </div>
    </div>
) 


const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => { 
    console.log(state.messages);
    return {
      objectives:state.objectives,
      currentUser:state.currentUser,
      // FOR THE PASSWORD RESET
      password: state.password,
      newPassword: state.newPassword,
      MDPState:state.MDPState,
      budgetError:state.budgetError,
      messages:state.messages,
      isCheck : state.isCheck
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch,ownProps) => {
    return {
      isCheckbox: () => {
        const action = {
          type : 'SWITCH_VEGAN',
          isCheck:event.target.checked
        }
        dispatch(action);
      },
      objectivesInputUpdate:(event) => {
        event.preventDefault();
        // FOR THE PASSWORD RESET
        sessionStorage.setItem('mdp',event.target.value);
        // FOR SUBMITOBJECTIVES
        sessionStorage.setItem('objectives',event.target.value);
        
        const action = {
          type:'OBJECTIVES_UPDATE',
          objectives: event.target.value,
          }
          dispatch(action);

        },
        typeOldPassword: (event) => {
          console.log('ancien Password  en cours de saisie')
          event.preventDefault();  
          const action={
              type:'TYPE_OLD_PASSWORD',
              value: event.target.value
            };
 
            dispatch(action);
        },
        typeNewPassword: (event) => {
          console.log('Nouveau Password  en cours de saisie')

          event.preventDefault();  
          const action={
              type:'TYPE_NEW_PASSWORD',
              value: event.target.value
            };
 
            dispatch(action);
        },
      

        // FOR THE PASSWORD RESET L142 TO L167
        submitNewPassword:(password,newPassword,event) => {
          event.preventDefault();
          var token = sessionStorage.getItem('jwtToken');         
          var formData = new FormData();
          formData.set('password',password.password);
          formData.set('newPassword',newPassword.newPassword);
          console.log(password.password);
          console.log(newPassword.newPassword);
          console.log('mon formdata => ' + formData);
          
          
           axios({
          method: 'post',
          url: 'http://api.oconomat.fr/api/password/change', 
          headers:{
            'Authorization':`bearer ${token}`
          },
          data:formData
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
          
        // FOR SUBMITOBJECTIVES
        submitObjectives:(isCheck,event) => {
          console.log('isChecked =>'+isCheck)
          event.preventDefault(); 
          var token = sessionStorage.getItem('jwtToken'); 
            axios({
               method: 'post',
               url: 'http://api.oconomat.fr/api/objectif/menu/generate',
               headers:{
                'Authorization':`bearer ${token}`,
                }, 
                data: {
                  budget:sessionStorage.getItem('objectives'),
                  vegetarian: isCheck
                },  
              }).then((response)=>{
                console.log(response)
                const action = {
                  type:'RESET_OBJECTIVES',
                  objectives: ''
                  }
                  dispatch(action);
        
                axios({
                  method: 'get',
                  url: 'http://api.oconomat.fr/api/objectif/budget/last/'+ sessionStorage.getItem('id'),
                  headers:{
                  'Authorization':`bearer ${token}`,
                  }, 
                 }).then((response1)=>{ 
                   console.log('hello world')
                  console.log(response1);
                sessionStorage.setItem('budget',response1.data);
                document.location.reload();
                ownProps.history.push('/dashboard') ;
              }).catch((error)=>{ 
               
                
              })
              ownProps.history.push('/dashboard') ;
            }).catch((error)=>{ 
              const action={type:'Detect-Budget-Error',value:'Vieullez saisir un budget entre 25 et 75 euro par personne'}
                dispatch(action);
                console.log('failure')
                console.log(error.response.status)
                ownProps.history.push('/dashboard') 
                setTimeout(function(){
                  document.location.reload()
                },5000)

             
            })
      },
    }
  }
)
// Étape 2 : on applique ces stratégies à un composant spécifique.
const DashBoardContainer = connectionStrategies(DashBoard);


export default DashBoardContainer ;