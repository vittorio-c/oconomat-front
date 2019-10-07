/* import './style.sass' */
import React from 'react';
import {connect} from 'react-redux';
import data from './data';




const Ingredients = ({doCheck,buttonClass,textClass,stockBase,...ingredient}) => {

    return(
        data.map(function(ingredient) {
            
            return (

                <tr className = {textClass} key = {ingredient.position}>
                    <th scope="row" className ='align-middle'>
                        {ingredient.position}
                    </th>
                    <td className= 'align-middle'>
                        {ingredient.name}
                    </td>
                    <td className= 'align-middle'>
                        <span className= 'font-weight-bold m-2'>
                            {ingredient.quantity}
                        </span>
                            {ingredient.measure}
                    </td>
                    <td>
                        <button onClick= {doCheck} className={buttonClass}/>
                    </td>
                </tr>
                
            )
        })
)
}



 



const MarketList = ({doCheck,buttonClass,textClass,stockBase}) => {
    return (
            <div className="Site-content">
                <main className="main">
                <div className ="main-frame">
                <h2 className="pt-4 pb-4 text-center font-weight-bolder text-warning">Ma liste de course</h2>
                <table className="table ">
                    <thead className="thead-light">
                        <tr className = {textClass}>
                            <th scope="col">#</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Quantité</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                   
                <Ingredients doCheck = {doCheck} buttonClass = {buttonClass} textClass = {textClass} stockBase = {stockBase}/>
                        
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



const connectionStrategies = connect(
    // 1er argument : stratégie de lecture (dans le state privé global)
    (state, ownProps) => { 
      //console.log(state.recipes);
      return {
      ...state, 
      buttonClass:state.buttonClass,
      textClass: state.textClass
    };
},
  
    // 2d argument : stratégie d'écriture (dans le state privé global)
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
  
  // Étape 2 : on applique ces stratégies à un composant spécifique.
  const MarketListContainer = connectionStrategies(MarketList);
  

export default MarketListContainer ;