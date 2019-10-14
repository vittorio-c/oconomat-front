/* import './style.sass' */
import React from 'react';
import {connect} from 'react-redux';

import './marketList.sass'
const Ingredients = ({doCheck,buttonClass,textClass,shoppingList}) => {
    
        
    return(
        shoppingList.map(function(ingredient,index) { 
            const ingredientName = ingredient.name;
            switch (ingredient.unit){
                case 'unité' : 
                ingredient.quantity = Math.ceil(ingredient.quantity)
                if (ingredient.quantity > 1 ){ingredient.unit = 'unités'}
                ingredient.unit = ''
                break;
                case 'kg' : 
                ingredient.quantity = Math.round(ingredient.quantity * 1000),
                ingredient.unit = 'g'
                break;
                case 'l' :
                ingredient.quantity = Math.round(ingredient.quantity * 100),
                ingredient.unit = 'cl'
                break;
                case 'sachet' :
                ingredient.quantity = Math.ceil(ingredient.quantity)
                break;
                case 'botte' :
                ingredient.quantity = Math.ceil(ingredient.quantity)
                break;
                case 'barquette' :
                ingredient.quantity = Math.ceil(ingredient.quantity)
                if (ingredient.quantity >1){Ingredient.unit = 'barquettes'}
                break;
                case 'barquettes' :
                ingredient.quantity = Math.ceil(ingredient.quantity)
                break;
                }  
            return (
                <tr className = {textClass} key = {ingredient.position}>
                    <td className= 'align-middle font-weight-bold'>
                    { ingredientName.charAt(0).toUpperCase() + ingredientName.slice(1) }
                    </td>
                    <td className= 'align-middle zonename'>
                        <span className= 'font-weight-bold text-success'>{ingredient.quantity}</span>
                        <span className= 'font-weight-bold'> {ingredient.unit}</span>
                    </td>
                    <td>
                        <button onClick= {doCheck} className={buttonClass}/>
                    </td>
                </tr>
            )
        })
)
}

const MarketList = ({doCheck,buttonClass,textClass,stockBase,shoppingList}) => {
    if (shoppingList !== ""){
    return (
            <div className="Site-content">
                <main className="main">
                <div className ="main-frame">
                <h2 className="pt-4 pb-4 text-center font-weight-bolder text-warning">Ma liste de course</h2>
                <table className="table ">
                    <thead className="thead-light">
                        <tr className = {textClass}>
                            <th scope="col">Nom</th>
                            <th scope="col">Quantité</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                <Ingredients doCheck = {doCheck} buttonClass = {buttonClass} textClass = {textClass} stockBase = {stockBase} shoppingList ={shoppingList} />
                    </tbody>
                </table>
                <button type="button" className="btn btn-danger btn-block" data-toggle="modal" data-target="#exampleModal">
                Nettoyer votre liste
                </button>
    
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Etes vous sûr?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                Vous allez supprimer votre liste de course actuelle !
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                <button type="button" className="btn btn-danger btn-block">Supprimer la liste</button>

                </div>
                </div>
                </div>
                </div>
                </div> 
                </main>
            </div>
    )
}
else
return(
    <div className =''>
    <div className ="d-flex justify-content-center m-5 text-center spinner-border"><span class="sr-only">Chargement de votre liste de course en cours veuillez patienter</span></div>
    <div>Chargement de votre liste de course en cours veuillez patienter</div>
    </div>
);
}



const connectionStrategies = connect(
    (state, ownProps) => { 
      return {
      shoppingList:state.shoppingList,
      buttonClass:state.buttonClass,
      textClass: state.textClass
    };
},
    (dispatch,ownProps) => {
      return {
          stockBase:() => {
        const action = {
            type:'STOCK',
            marketList : {...ingredient}
        }
        dispatch(action)
          },
        doCheck:(event) => {
          event.preventDefault();
           const action = {
            type:'CHECKED',
            buttonClass : event.target.className = "btn btn-success btn-lg btn-block fa fa-check-square disabled",
            textClass :  event.currentTarget.parentNode.parentNode.className = 'bg-dark text-light'
          }; 
           dispatch(action); 
        }
      }
    }
  )

const MarketListContainer = connectionStrategies(MarketList);
  

export default MarketListContainer ;