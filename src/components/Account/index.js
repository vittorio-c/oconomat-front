
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
                <p className ='objectif mb-1'>Votre Objectif : <span> {sessionStorage.getItem('budget')} € </span></p>
                <button className='change-password btn'>Changer votre mot de passe</button>
            </div> 
          </div>
        </form>
      </div>
    </div>
) 
const connectionStrategies = connect(
    (state, ownProps) => { 
        return {
        currentUser:state.currentUser
      };
    },

    (dispatch, ownProps) => {
      return {
      };
    },
  );
  const Account = connectionStrategies(AccountInfoStatic);

export default Account ;