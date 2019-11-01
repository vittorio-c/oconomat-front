import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios' 

import './Recipes.sass';
import { isFulfilled } from 'q';

const RecettesStatic = ({recipes,findRecipe,getStateType,recipeType,recipe,messages}) => {
    return (
        <main>
            <div className="Site-content">
                <main className="main">
                    <RecipesMain recipes={recipes} findRecipe={findRecipe} getStateType={getStateType} recipeType={recipeType} recipe={recipe} messages={messages}/>
                </main>
            </div>
        </main>
       
    )
} 

const RecipesMain = ({recipes,findRecipe,showRecipeTypes,getStateType,recipeType,recipe,messages}) => { 
    if(recipes.length==0){
        
    }
    if(recipes.length!=0){ 
    const recipeIndex=[]
        
    return <div class="container"> <div className="d-none d-sm-block recipes-main"> 
   
    <h2 className="recipes-title">Liste de vos Recettes Pour la Semaine </h2>  
    
    
 
     <div class="row">
        <div class="d-none d-md-block col-md-4"> <button class="btn btn-warning" onClick={getStateType}> petit déjeuner  </button></div> 
        <div class="d-none d-md-block col-md-4"> <button class="btn btn-warning" onClick={getStateType}> déjeuner  </button></div>
        <div class="d-none d-md-block col-md-4"> <button class="btn btn-warning" onClick={getStateType}> dîner </button></div>
     
     </div> 
    
  

     

   
        
        <div className="d-none d-sm-block col-md-8 offset-md-2 recipe-box"> 
        {recipeType.length!=0 ?
        
      
        <Carousel class="p-y-5"> 
        {recipes.map(function(recipe,index){  
         if(recipe.type==recipeType.trim()){ 
            console.log(recipe.image)
         
        return <Carousel.Item> 
            
            <img className="d-block w-100 max-height" src={recipe.image}/>
        <Carousel.Caption key={index}>
        <h3 className="recipes-name-title">{recipe.title} </h3> 
        <Link to="/Recipe"> <button className="details-btn btn" onClick={()=>{findRecipe(index,recipes)}}> <a>Details</a>  </button> </Link>
        <p className="text-black">A manger pour le {recipe.type}</p> 
        <p className="text-black"> Prix: {recipe.price} € </p> 
        
        
        </Carousel.Caption>
        </Carousel.Item>
         }

        })} 
        </Carousel>   
       
        :<h3 className="recipes-title"> Veuillez Choisir</h3> } 

        


      
     </div> 


     
     
     
</div> 
 <div class="d-block d-sm-none">  
    <div>
      <Carousel className="p-y-5">
        {recipes.map(function(recipe,index){
            if(recipe.type==recipeType.trim()){ 
             if(recipe.title.length<=30){
            return<Carousel.Item>  
              
                <img className="d-block w-100 max-height-mobile" src={recipe.image}/>
                <Carousel.Caption> 
                
               <div class="col-xs-12 bg-yellow title-height"> <p className="recipes-title-small"> {recipe.title} </p>  </div>
               <div class="col-xs-12 bg-yellow">  <p className="recipes-title-small"> Prix: {recipe.price} € </p>  </div> 
               
                  
                <Link to="/Recipe"> <button className="details-btn btn" onClick={()=>{findRecipe(index,recipes)}}> <a>Details</a>  </button> </Link> 
                </Carousel.Caption> 

            </Carousel.Item>
             } 

             else{
                return<Carousel.Item>  
              
                <img className="d-block w-100 max-height" src={recipe.image}/>
                <Carousel.Caption> 
                
               <div class="col-xs-12 bg-yellow title-height"> <p className="recipes-title-xs"> {recipe.title} </p>  </div>
               <div class="col-xs-12 bg-yellow">  <p className="recipes-title-small"> Prix: {recipe.price} € </p>  </div> 
               
                  
                <Link to="/Recipe"> <button className="details-btn btn" onClick={()=>{findRecipe(index,recipes)}}> <a>Details</a>  </button> </Link> 
                </Carousel.Caption> 

            </Carousel.Item>
             }
             
            }
        })} 
     </Carousel> 
     </div> 
     
     
     
        <div class="col-xs-12"> <button class="btn btn-warning width-full" onClick={getStateType}> petit déjeuner </button> </div> 
        <div class="col-xs-12"> <button class="btn btn-warning width-full " onClick={getStateType}> déjeuner </button> </div>
        <div class="col-xs-12"> <button class="btn btn-warning width-full" onClick={getStateType}> dîner </button>  </div>
    
    
    </div> 
</div>
    } 
    else{
        return  (<div>{messages.recipeListErrMessage!='' ? <div class="alert alert-danger text-center" role="alert"> {messages.recipeListErrMessage} </div> : <span> </span> } 
        <div> Recipes  Are Loading </div> </div>)
    }
} 
 


    

   



const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => { 
    return {
      recipes:state.recipes,
      recipe:state.recipe,
      recipeType:state.recipeType,
      messages:state.messages
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
    
      findRecipe:(id,recipes) =>{ 
        const url = recipes[id].url;
        var token=sessionStorage.getItem('jwtToken')
        axios.get(
          url,
          {
            headers:{
              'Authorization':`bearer ${token}`
            }
          }).then((response)=>{ 
          const action={type:'See-Recipe',value:response};
          dispatch(action);

          }).catch((error) => {
            if (error.response.status === 401 ){
              Swal.fire({
                type: 'error',
                title: 'Session non valide',
                text: "Votre session n'est plus valide, veuillez vous reconnecter",
              })
              sessionStorage.clear();
              window.location.href = '/signin'
              }
          if (error.response.status === 401 ){
            sessionStorage.clear();
            window.location.href = '/signin'
            }
          })
        },
     getStateType(event){ 
         const action={type:'Choose-Recipe-Type',value:event.target.textContent}
         dispatch(action);
     },
     reInitializeMessages:() =>{
        const action={type:'Reset-Messages',value:''}
        dispatch(action)
    }
     
      
    
      
  }
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const Recettes = connectionStrategies(RecettesStatic);

// Étape 3 : on exporte le composant connecté qui a été généré 




export default Recettes;