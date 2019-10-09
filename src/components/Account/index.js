
/* import './style.sass' */
import React from 'react';
import {connect} from 'react-redux' 


/* Import du fichier Sass */
import './Account.sass'

const AccountInfoStatic = ({currentUser}) => {
   
    return (
              <main> 
                <div className="Site-content">
                    <main className="main">
                        <AccountInfo currentUser={currentUser} />
                    </main>
                </div>
            </main>
           
    )
}

const AccountInfo = ({currentUser}) => ( 

    <div className="AccountInfoMain"> 
    
      <h2 className="MyAccount-title">Mon compte</h2>
      <div className="AccountBackground">
        <form>
          <div className="Account-info row pt-4">
            <div className="col-lg-10 container">
                <img src ='src/ressources/pictures/default-avatar.png' className ='avatar-img img-fluid rounded float-left'></img>
                <p className='user mt-2 mb-1'>Utilisateur: <span> {sessionStorage.getItem('firstname')+' '+sessionStorage.getItem('lastname')} </span> </p>
                <p className='password mb-1'>Password : <span>*********</span></p>
                <p className ='objectif mb-1'>Objectif : <span> {sessionStorage.getItem('budget')} € </span></p>
                <button className='change-password btn'>Changer mot de passe</button> 
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
        currentUser:state.currentUser
      };
    },
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
    (dispatch, ownProps) => {
      return {
        
        
      };
    },
  );

  const Account = connectionStrategies(AccountInfoStatic);

// Étape 3 : on exporte le composant connecté qui a été généré 








export default Account ;