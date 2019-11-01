/* import './style.sass' */
import React from 'react';
import {connect} from 'react-redux';
import  axios  from 'axios';
import Swal from 'sweetalert2';

import './style.sass';

const DashBoard= ({nbPeople,nbPeopleInputUpdate,isCheck,isCheckbox,submitNewPassword,newPassword,password,typeOldPassword,typeNewPassword,submitObjectives,objectivesInputUpdate,objectives,currentUser,budgetError,messages}) => {
    return (
            <main>
                <div className="Site-content">
                    <main className="main">
                        <AccountInfo nbPeople={nbPeople} nbPeopleInputUpdate ={nbPeopleInputUpdate} isCheck={isCheck} isCheckbox ={isCheckbox} submitNewPassword={submitNewPassword} newPassword = {newPassword} password= {password} typeOldPassword= {typeOldPassword} typeNewPassword= {typeNewPassword} submitObjectives = {submitObjectives} objectivesInputUpdate = {objectivesInputUpdate}objectives ={objectives} messages={messages}/>
                    </main>
                </div>
            </main>
        
    )
}

const AccountInfo = ({nbPeople,nbPeopleInputUpdate,isCheck,isCheckbox,submitNewPassword,newPassword,password,typeOldPassword,typeNewPassword,submitObjectives,objectivesInputUpdate,objectives,budgetError,messages}) => ( 

    <div className="AccountInfoMain"> 
    <h2 className="dashboard-title pt-4 pb-4 text-center font-weight-bolder">Tableau de bord</h2> 
    

      <div className="AccountBackground m-5 py-sm-5">
        <form>
          <div className="Account-info row pt-4">
            <div className="col-lg-10 container pl-0 py-5">
              <div className = 'container pt-sm-5'>
                <img src ='src/ressources/pictures/cookingmama.png' className ='avatar-img img-thumbnail max-width:10% pt-sm-2'></img>
              </div>
              <p className='user mt-2 mb-2 text-center'><span>Prénom : <span className ='text-success'>{sessionStorage.getItem('firstname')}</span> </span> </p>
              <p className='user mt-2 mb-2 text-center'><span>Nom de famille :<span className ='text-success'> {sessionStorage.getItem('lastname')}</span> </span> </p>
              <p className='user mt-2 mb-2 text-center'> <span className ='text-success'>{ sessionStorage.getItem('userQuantity') === 'null' || sessionStorage.getItem('userQuantity') === '1' ? '1' +' personne' : sessionStorage.getItem('userQuantity')+' personnes'} </span> </p>
              
              <p className='password mb-2 text-center'>Password : <span className = 'text-secondary'>*********</span></p>
              <p className ='objectif mb-2 text-center'>Objectif : <span className = 'text-success'> {sessionStorage.getItem('budget') === 'null' ? 0 : sessionStorage.getItem('budget') } € </span></p>

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
                            <button type="button" className="btn-submit-password btn-block btn-rounded z-depth-1" onClick={() =>{submitNewPassword(password,newPassword,event)}}>{password !== newPassword ? 'Valider' : 'Error'}</button>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button type="button" className="btn btn-primary text-center" data-toggle="modal" data-target="#exampleModal">
              { sessionStorage.getItem('budget') !== null || sessionStorage.getItem('budget') !== '' ? 'Modifier vos objectifs' : 'Saisir vos premiers objectifs'}
              </button> 
              <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content"> 

                   {messages.budgetError!='' && messages.budgetError!=undefined ? <div className="alert alert-danger" role="alert"> {messages.budgetError} </div> : <span> </span>} 
                  
                    <div className="modal-header"> 
                    
                      <h5 className="modal-title" id="exampleModalLabel">Modifier vos objectifs</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div className="modal-body">
                        <div className="md-form mb-5">
                          <input onChange = {objectivesInputUpdate}  type="number" id="inputforobjectives5" className="form-control validate white-text" placeholder="Inserez votre nouveau budget" />
                          <label data-error="wrong" data-success="right" for="inputforobjectives5"></label>
                        </div>
                        <div className="md-form pb-3">
                          <input onChange = {nbPeopleInputUpdate}  type="number" id="inputfornumberofpeople5" className="form-control validate white-text" placeholder="Inserez le nombre de personne dans votre foyer"/>
                          <label data-error="wrong" data-success="right" for="inputfornumberofpeople5"></label>
                        </div>
                        <div className = "text-left text-secondary mt-5">Vos préférences alimentaires</div>
                        <div className = "text-left text-success my-2"><input type="checkbox" aria-label="vegetarian checkbox" className = "" onChange = {() => {isCheckbox(isCheck,event)}}/>Végétarien </div>
                        <div className="modal-footer">
                        <button type ="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                      { objectives >0 && nbPeople > 0? <button type="button" className='text-center' onClick = {() => {submitObjectives(nbPeople,isCheck,event)}} onSubmit = {() => {submitObjectives(nbPeople,isCheck,event)}} className="btn btn-success" type="submit"> Valider {objectives} { objectives >0 ? ' €' : '' } pour {nbPeople} {nbPeople < 1 ? 'personnes' :'personnes' } </button> : '' }
                      </div>
                      </div>
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
    return {
      objectives:state.objectives,
      currentUser:state.currentUser,
      // FOR THE PASSWORD RESET
      password: state.password,
      newPassword: state.newPassword,
      MDPState:state.MDPState,
      budgetError:state.budgetError,
      messages:state.messages,
      isCheck : state.isCheck,
      nbPeople: state.nbPeople
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
      nbPeopleInputUpdate:(event) => {
        event.preventDefault();
        const action = {
          type: 'TYPE_NBPEOPLE',
          nbPeople: event.target.value
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
          event.preventDefault();  
          const action={
              type:'TYPE_OLD_PASSWORD',
              value: event.target.value
            };
 
            dispatch(action);
        },
        typeNewPassword: (event) => {

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
          
           axios({
          method: 'post',
          url: 'http://api.oconomat.fr/api/password/change', 
          headers:{
            'Authorization':`bearer ${token}`
          },
          data:formData
          })
          .then(function (response) {
            if (response.data === "Les mots de passe ne correspondent pas"){

            }

            const Swal = require('sweetalert2')
            Swal.fire({
              type: 'success',
              title: response.data,
              showConfirmButton: false,
              timer: 2000
            })
            
              
          }).catch((error)=>{
            
            if (error.response.status === 401 ){
              Swal.fire({
                type: 'error',
                title: 'Session non valide',
                text: "Votre session n'est plus valide, veuillez vous reconnecter",
              })
              sessionStorage.clear();
              window.location.href = '/signin'
              }
              else
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
          
        // FOR SUBMITOBJECTIVES
        submitObjectives:(nbPeople,isCheck,event) => {
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
                  userQuantity : nbPeople ,
                  vegetarian: isCheck
                },  
              }).then((response)=>{
                sessionStorage.setItem('userQuantity',response.data.userQuantity);
                Swal.fire({
                  type: 'success',
                  title: 'Vos objéctifs ont été pris en compte',
                  showConfirmButton: false,
                  timer: 5000
                })
                const action = {
                  type:'RESET_OBJECTIVES',
                  objectives: '',
                  userQuanntity: '',
                  vegetarian : false

                  }
                  dispatch(action);
                axios({
                  method: 'get',
                  url: 'http://api.oconomat.fr/api/objectif/budget/last/'+ sessionStorage.getItem('id'),
                  headers:{
                  'Authorization':`bearer ${token}`,
                  }, 
                 }).then((response1)=>{ 
                  sessionStorage.setItem('budget',response1.data);
                 document.location.reload();
                 ownProps.history.push('/dashboard') ; 
              }).catch((error)=>{ 
                if (error.response.status === 401 ){
                  Swal.fire({
                    type: 'error',
                    title: 'Session non valide',
                    text: "Votre session n'est plus valide, veuillez vous reconnecter",
                  })
                  sessionStorage.clear();
                  window.location.href = '/signin'
                  }
              })
               ownProps.history.push('/dashboard') ; 
            }).catch((error)=>{ 
              if (error.response.status === 401 ){
                Swal.fire({
                  type: 'error',
                  title: 'Session non valide',
                  text: "Votre session n'est plus valide, veuillez vous reconnecter",
                })
                sessionStorage.clear();
                window.location.href = '/signin'
                }else
              Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: "Veuillez saisir un budget entre 30 et 75 euro par personne",
              })
            })
          
      },
    }
  }
)
// Étape 2 : on applique ces stratégies à un composant spécifique.
const DashBoardContainer = connectionStrategies(DashBoard);


export default DashBoardContainer ;