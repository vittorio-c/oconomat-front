/* import './style.sass' */
import React from 'react';
import {connect} from 'react-redux';
import  axios  from 'axios';

import './style.sass';

const DashBoard= ({submitObjectives,objectivesInputUpdate,objectives,currentUser}) => {
    return (
            <main>
                <div className="Site-content">
                    <main className="main">
                        <AccountInfo submitObjectives = {submitObjectives} objectivesInputUpdate = {objectivesInputUpdate}objectives ={objectives}/>
                    </main>
                </div>
            </main>
           
        
    )
}

const AccountInfo = ({submitObjectives,objectivesInputUpdate,objectives}) => ( 

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
                <p className ='objectif mb-2 text-center'>Objectif : <span> {sessionStorage.getItem('budget')} € </span></p>
                <button className='change-password btn'>Modifier mot de passe</button> 
                <button type="button" class="btn btn-primary text-center" data-toggle="modal" data-target="#exampleModal">
                { sessionStorage.getItem('budget') !== null || sessionStorage.getItem('budget') !== '' ? 'Modifier vos objectifs' : 'Saisir vos premiers objectifs'}
                </button>

              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modifier vos objectifs</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form>
                    <input onChange = {objectivesInputUpdate}  type="number" className="form-control form-control-sm" id="colFormLabelLg" placeholder="Inserez votre nouveau budget"/>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                    { objectives >0 ? <button type="button" onClick = {submitObjectives} onSubmit = {submitObjectives} className="btn btn-success" type="submit"> Valider {objectives} { objectives >0 ? ' € ?' : '' } </button> : '' }
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
    return {
      objectives:state.objectives,
      currentUser:state.currentUser
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch,ownProps) => {
    return {
      objectivesInputUpdate:(event) => {
        event.preventDefault();
        sessionStorage.setItem('objectives',event.target.value);
        const action = {
          type:'OBJECTIVES_UPDATE',
          objectives: event.target.value,
          }
          dispatch(action);

        },
      submitObjectives:(event) => {
         event.preventDefault(); 
         var token = sessionStorage.getItem('jwtToken'); 
           axios({
               method: 'post',
               url: 'http://api.oconomat.fr/api/objectif/menu/generate',
              headers:{
                'Authorization':`bearer ${token}`,
                }, 
                data: {
                  budget:sessionStorage.getItem('objectives')
                },  
              }).then((response)=>{

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
                sessionStorage.setItem('budget',response1.data);
                document.location.reload();
                ownProps.history.push('/dashboard') ;
              }).catch((error)=>{
                console.log('failure')
                console.log(error)
              })
              ownProps.history.push('/dashboard') ;
            }).catch((error)=>{
              console.log('failure')
              console.log(error)
            })
      }
    }
  }
)
// Étape 2 : on applique ces stratégies à un composant spécifique.
const DashBoardContainer = connectionStrategies(DashBoard);


export default DashBoardContainer ;