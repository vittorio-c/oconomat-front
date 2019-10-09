/* import './style.sass' */
import React from 'react';
import {connect} from 'react-redux';
import { axios } from 'axios';


/* Import du fichier Sass */
import './Objectives.sass'

const ObjectivesStatic = ({submitObjectives}) => {
    return (
            <main>
                <div className="Site-content">
                    <main className="main">
                        <ObjectivesForm submitObjectives = {submitObjectives} />
                    </main>
                </div>
            </main>
           
        
    )
} 

const ObjectivesForm = ({submitObjectives}) => (
    <div>
    <h2 className="objectives-title">Mes objectifs</h2> 
      <form className="form-space">
      <input type="number" className="form-control form-control-sm" id="colFormLabelLg" placeholder="Votre budget à la semaine en €"/>
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
      objectivesState:state.objectivesState,
      currentUser:state.currentUser
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch,ownProps) => {
    return {
      submitObjectives:(event) => {
        console.log('SUBMITOBJECTIVES')
         event.preventDefault(); 
         var token = sessionStorage.getItem('jwtToken'); 
         console.log(token);
          axios({
               method: 'post',
               url: 'http://api.oconomat.fr/api/objectif/menu/generate',
              /*   headers:{
                'Authorization':`bearer ${token}`,
                }, 
                data: {
                  budget:100/* objectivesState.objectives */
                },  

               ).then((response)=>{
               console.log(response); 
               const action = {
                type:'ENTER_OBJECTIVES',
                value : event.target.value
              };
              dispatch(action)

                 
              //resolve();
              
              ownProps.history.push('/Account') ;
            }).catch((error)=>{
              console.log('failure')
              console.log(error)
            }); 
      }
    }
  }
)

// Étape 2 : on applique ces stratégies à un composant spécifique.
const Objectives = connectionStrategies(ObjectivesStatic);


export default Objectives ;