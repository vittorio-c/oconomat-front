
/* import './style.sass' */
import React from 'react';

import Footer from 'src/components/Footer';

/* Import du fichier Sass */
import './Account.sass'
import HeaderMyAccount from 'src/components/HeaderMyAccount';

const Account = () => {
    return (
        <main>
            <div className ="main-frame">
                <header>
                  <HeaderMyAccount/>
                </header>
                    <AccountInfo />
                <footer>
                  <Footer />
                </footer>
            </div>
        </main>
    )
}

const AccountInfo = () => (
    <div>
    
      <h2 className="text-center font-weight-bold text-warning">Mon compte</h2>
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
)

export default Account ;