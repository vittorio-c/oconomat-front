import React from 'react' 
import './app.sass';

import Header from '../Header/index.js';
import Footer from 'src/components/Footer';

const Inscription =()=>{
    return(
      <div>
          <header>
            <Header />
          </header>

        <main>  
            <div className="container white">
      <h2 className='text-center font-weight-bolder text-warning'>Inscription</h2>
                    <form className="d-flex flex-column">

                        <div className="form-group mt-4">
                          <input type="text" className="form-control rounded-left rounded-right" name="lastname" placeholder ='Your lastname'/>
                      </div> 

                      <div className="form-group">
                          <input type="text" className="form-control rounded-left rounded-right" name="firstname" placeholder ='Your firstname'/>
                      
                      </div> 

                      <div className="form-group">
                          <input type="email" className="form-control rounded-left rounded-right" name="email" placeholder ='Your email'/>
                      
                      </div> 

                      <div className="form-group">
                          <input type="password" className="form-control rounded-left rounded-right" name="email" placeholder ='Your password'/>
                      
                      </div> 

                      <div className="form-group">
                          <input type="password" className="form-control rounded-left rounded-right mb-4" name="email" placeholder ='Confirm your password'/>
                      
                      
                      </div> 

                      <button type="submit" className="btn btn-success btn-block">Envoyer</button>

                      


                        </form> 
                      </div>

        </main>
          <footer>
            <Footer />
          </footer>
      </div>
    )
} 

export default Inscription