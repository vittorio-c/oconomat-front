const initialState = {
  recipes:[],
  recipe:[],
  inputValueFirstName:{},
  inputValueLastName:{},
  inputValueEmail:{},
  inputValueMDP:{},
  inputValueConfirmMDP:{},
  inputValues: []
  

};

const defaultAction = {};

const reducer = (state = initialState, action = defaultAction) => {
  switch (action.type) { 

    case 'Insert-Input-FirstName':{
      return {...state,inputValueFirstName:{firstname:action.value}}
    }

    case 'Insert-Input-LastName': {
      return {...state,inputValueLastName:{lastname:action.value}}
    }

    case 'Insert-Input-Email': {
      return {...state,inputValueEmail:{email:action.value}}
    } 

    case 'Insert-Input-MDP': { 
      return {...state,inputValueMDP:{password:action.value}}
    } 

    case 'Insert-Input-MDP-Confirm': {
      return {...state,inputValueConfirmMDP:{passwordConfirm:action.value}}
    }
    case 'Submit-Form': { 
      
      return {...state,
        inputValues:[state.inputValueFirstName,state.inputValueLastName,state.inputValueEmail,state.inputValueMDP,state.inputValueConfirmMDP]}
        
    } 
    
    case 'Get-Values' :{
      return {
        ...state.inputValues
      }
    }
  
    
    case 'See-Recipe' :{
      return {
        ...state,recipe:action.value
      }
    }

    case 'Show-Recipes' : { 
      console.log('RECIPES FETCHED')
      return{...state,recipes:action.value} 
    } 

   
    default: {
      // return state;
      // Dans le cas où on ne comprend pas quelle est l'action à
      // effecture (action.type n'est pas reconnu), on retourne
      // une copie non-altérée du state courant, reçu en paramètre.
      return { ...state };
    }
  }
};

export default reducer;
