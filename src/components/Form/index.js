import React from 'react';
import { BrowserRouter as Router, Route, Link,Redirect} from "react-router-dom";
import MaPageObjectifs from '../Objectifs/index.js';

class Form extends React.Component {  

    state={
        submitted:false
    }

   

    renderRedirect=(event) => {   
        event.preventDefault(); 
        this.props.history.push('/objectifs')
        
    }

    render (){
    return( 
    <Router> 
     
     <div> 
       <form onSubmit={this.renderRedirect} method="post" action="">
       <input type="text" placeholder="username" name="username"/> 
       <input type="password" placeholder="mdp" name="mdp"/> 
       <input type="submit" value="envoyer"/> 
      

     </form>
    
    
    
     </div> 
    </Router> 
   
    )
    }
    
}  





export default Form;