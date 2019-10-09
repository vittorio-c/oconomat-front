/* import './style.sass' */
import React from 'react';
import {connect} from 'react-redux';
import  axios  from 'axios';


/* Import du fichier Sass */
import './Objectives.sass'

const ObjectivesStatic = ({submitObjectives,objectivesInputUpdate,objectives}) => {
    return (
            <main>
                <div className="Site-content">
                    <main className="main">
                        <ObjectivesForm submitObjectives = {submitObjectives} objectivesInputUpdate ={objectivesInputUpdate} objectives = {objectives} />
                    </main>
                </div>
            </main>
           
        
    )
} 

const ObjectivesForm = ({submitObjectives,objectivesInputUpdate,objectives}) => (
    <div>
    <h2 className="objectives-title">Mes objectifs</h2> 
      <form className="form-space">
      <input onChange = {objectivesInputUpdate} type="number" className="form-control form-control-sm" id="colFormLabelLg" placeholder="Votre budget à la semaine en € (entre 50 et 200 pour le moment :) )"/>
          <div className="button-box">
          { objectives >0 ? <button onClick = {submitObjectives} className="objectives-validation btn btn-md mt-3 center-block" type="submit">Valider  {objectives}{ objectives >0 ? ' € ?' : '' }</button> : '' }
          </div>
      </form>
    </div>
) 



const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => { 
    return {
      objectives:state.objectives
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
                ownProps.history.push('/Account') ;
                
              }).catch((error)=>{
                console.log('failure')
                console.log(error)
              })
              ownProps.history.push('/Account') ;
            }).catch((error)=>{
              console.log('failure')
              console.log(error)
            })
      }
    }
  }
)
// Étape 2 : on applique ces stratégies à un composant spécifique.
const Objectives = connectionStrategies(ObjectivesStatic);


export default Objectives ;