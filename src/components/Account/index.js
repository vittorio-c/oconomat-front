
/* import './style.sass' */
import React from 'react';
import HeaderMyAccount from 'src/components/HeaderMyAccount';

import Footer from 'src/components/Footer';

/* Import du fichier Sass */
import './Account.sass'

const Account = () => {
    return (
            <body className ="Site">
                <div className="Site-content">
                    <div className="App-header">
                        <HeaderMyAccount/>
                    </div>
                    <main className="main">
                        <AccountInfo />
                    </main>
                </div>
                <Footer />
             </body>
    )
}

const AccountInfo = () => (
    <div className="AccountInfoMain">
      <h2 className="MyAccount-title">Mon compte</h2>
      <div className="AccountBackground">
        <form>
          <div className="Account-info row pt-4">
            <div className="col-lg-10 container">
                <img src ='src/ressources/pictures/default-avatar.png' className ='avatar-img img-fluid rounded float-left'></img>
                <p className='user mt-2 mb-1'>User : <span>John Doe</span></p>
                <p className='password mb-1'>Password : <span>*********</span></p>
                <p className ='objectif mb-1'>Objectif : <span>100 €</span></p>
                <button className='change-password btn'>Changer mot de passe</button> 
            </div> 
          </div>
        </form>
      </div>
    </div>
)

export default Account ;