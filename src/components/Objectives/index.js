/* import './style.sass' */
import React from 'react';
import {connect} from 'react-redux';


/* Import du fichier Sass */
import './Objectives.sass'

const ObjectivesStatic = () => {
    return (
            <main>
                <div className="Site-content">
                    <main className="main">
                        <ObjectivesForm />
                    </main>
                </div>
            </main>
           
        
    )
} 

const ObjectivesForm = () => (
    <div>
    <h2 className="objectives-title">Mes objectifs</h2> 
      <form className="form-space">
      <input type="email" className="form-control form-control-sm" id="colFormLabelLg" placeholder="Votre budget à la semaine en €"/>
          <div className="button-box">
              <button className="objectives-validation btn btn-md mt-3 center-block" type="submit">Valider</button>
          </div>
      </form>
    </div>
) 



const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => { 
     console.log(state);
      console.log(state.currentUser)
      //console.log(state.recipes);
      return {
        currentUser:state.currentUser
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
        
        
      };
    },
  );

  const Objectives = connectionStrategies(ObjectivesStatic);


export default Objectives ;