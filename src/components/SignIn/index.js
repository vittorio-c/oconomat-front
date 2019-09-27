import React from 'react'
import './app.sass'

const Connexion =() => {
    return(<div className="container white">
    <div className="header"> 
       <div className="row"> 
         <div className="col-sm-3">
             
                 <img src="src/Images/logo.png" className="img-fluid" alt="image-fluid"/> 
             
         </div> 
         <div className="offset-sx-6 col-sm-3 offset-sm-6">
            <button type="button" className="col-xs-12 col-sm-8 btn btn-primary yellow"> Retour Accueil</button>
         </div> 
          <div className="col bg-image">
            <div className="col-6 offset-3 box">
          <div className="col-sm-6 offset-sm-3 d-flex justify-content-center form-cont"> 
        
           <form className="d-flex flex-column">
            
            <div className="form-group">
                <label htmlFor="votre email" className="white-form-label"> Votre Email</label> 
                <input type="email" className="form-control rounded-left rounded-right" name="email"/>
            
            
            </div> 

            <div className="form-group">
                <label htmlFor="votre email" className="white-form-label"> Votre MDP</label> 
                <input type="password" className="form-control rounded-left rounded-right" name="email"/>
            
            
            </div> 


            

            <button type="submit" className="btn btn-primary green">Envoyer</button>

            


              </form> 
            </div>
          </div>
          </div>
        </div>

    
       </div> 
    


</div>)
}


export default Connexion

       
    
    
    