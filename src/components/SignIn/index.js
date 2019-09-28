import React from 'react'
import './app.sass'

import Header from '../Header/index.js';
import Footer from 'src/components/Footer';

const Connexion =() => {

    return(
      <div>
        <header>
          <Header />
        </header>
      
            <form className="">
            <h2 className='text-center font-weight-bolder text-warning'>Connexion</h2>
              <div className="form-group mt-4">
                  <input type="email" className="form-control rounded-left rounded-right" name="email" placeholder="Your mail here"/>             
              </div> 
              <div className="form-group">
                  <input type="password" className="form-control rounded-left rounded-right" name="password" placeholder="Your password here"/>
              </div> 


              

              <button type="submit" className="btn btn-success btn-block mt-5">Envoyer</button>

              


                </form> 

  <footer>
      <Footer />
  </footer>
  </div>
  )
}


export default Connexion

       
    
    
    