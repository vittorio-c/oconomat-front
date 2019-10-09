/* import './style.sass' */
import React from 'react';
import {connect} from 'react-redux';
import  axios  from 'axios';


/* Import du fichier Sass */
import './Objectives.sass'

const ObjectivesStatic = ({submitObjectives,objectivesInputUpdate}) => {
    return (
            <main>
                <div className="Site-content">
                    <main className="main">
                        <ObjectivesForm submitObjectives = {submitObjectives} objectivesInputUpdate ={objectivesInputUpdate}/>
                    </main>
                </div>
            </main>
           
        
    )
} 

const ObjectivesForm = ({submitObjectives,objectivesInputUpdate}) => (
    <div>
    <h2 className="objectives-title">Mes objectifs</h2> 
      <form className="form-space">
      <input onChange = {objectivesInputUpdate} type="number" className="form-control form-control-sm" id="colFormLabelLg" placeholder="Votre budget à la semaine en €"/>
          <div className="button-box">
              <button onClick = {submitObjectives} className="objectives-validation btn btn-md mt-3 center-block" type="submit">Valider</button>
          </div>
      </form>
    </div>
) 



const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => { 
    //console.log(state.recipes);
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
        const action = {
          type:'OBJECTIVES_UPDATE',
          objectivesInput :event.target.value 
          }
          dispatch(action);
        },
      
      submitObjectives:(event) => {
         event.preventDefault(); 
         var token = sessionStorage.getItem('jwtToken'); 
          console.log(token); 
           axios({
               method: 'post',
               url: 'http://api.oconomat.fr/api/objectif/menu/generate',
              headers:{
                'Authorization':`bearer ${token}`,
                }, 
                data: {
                  budget:150
                },  
              }).then((response)=>{
                const idUser = response.data.user.id

                console.log('mon user '+idUser);
              ownProps.history.push('/Account') ;
            }).catch((error)=>{
              console.log('failure')
              console.log(error)
            }), 
            axios({
              method: 'get',
              url: 'http://api.oconomat.fr/api/objectif/budget/last/'+ sessionStorage.id,
            headers:{
              'Authorization':`bearer ${token}`,
              }, 
            }).then((response1)=>{
              console.log(response1.data)
              sessionStorage.setItem('budget',response1.data);
            ownProps.history.push('/Account') ;
          }).catch((error)=>{
            console.log('failure')
            console.log(error)
          })
      },
    }
  }
)
// Étape 2 : on applique ces stratégies à un composant spécifique.
const Objectives = connectionStrategies(ObjectivesStatic);


export default Objectives ;