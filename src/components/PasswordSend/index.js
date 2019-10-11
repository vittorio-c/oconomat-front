import React from 'react' 
import axios from 'axios'
import {connect} from 'react-redux';

import './PasswordSend.sass';

const PasswordSend =() => {
  return (
    
          <div className="Site-content Site">
              <main className="main">
                  <PasswordSendPage />
              </main>
          </div>
      
    )
} 

const PasswordSendPage = () => {
  return <div className ='food-background mt-3'>
    <form className="d-flex flex-column">
        <div className="formBlock">
            <h2 className="inscription-title">Nous vous avons envoyé votre nouveau mot de passe</h2>
            <div className="form-group mt-4">
                <div className="information">
                    <p>
                        N'oubliez pas de verifier vos spams.
                    </p>
                    <p>
                        Vous pouvez vous connecter en utilisant votre nouveau mot de passe en cliquant 
                        <a className="link" href="/SignIn">ici</a>
                    </p>
                </div>
            </div>
         </div>
    </form>      
</div>
}
  
export default PasswordSend