
/* import './style.sass' */
import React from 'react';

import Footer from 'src/components/Footer';

/* Import du fichier Sass */
import './style.sass'
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
        <div className="form-group row pt-4">
          <div className="col-lg-10 container border border-warning">
            <img src ='src/ressources/pictures/default-avatar.png' className ='avatar-img img-fluid rounded float-left'></img>
            <p className='mt-2 mb-1'>User : <span>John Doe</span></p>
            <p className='mb-1'>Password : <span>*********</span></p>
            <p className ='mb-1'>Objectif : <span>100 €</span></p>
            <a type ='button' className = 'btn btn-success'>Changer mot de passe</a> 
          
          </div> 
        </div>
      </form>
    </div>
)

export default Account ;