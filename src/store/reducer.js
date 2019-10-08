const initialState = {
  recipes:[],
  recipe:[],
  emailState:'',
  passwordState:'',
  connectedUser : false,
  tokkenUser :{},
  inputValueFirstName:{},
  inputValueLastName:{},
  inputValueEmail:{},
  inputValueMDP:{},
  inputValueMDPConfirm:{},
  inputValues: [],
  checkedBox : false,
  buttonClass : "Coucou c'est lol",
  marketList : [],
  currentUser: {}

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

    case 'Confirm-Input-MDP': {
      return {...state,inputValueMDPConfirm:{passwordConfirm:action.value}}
    }

   
    case 'Submit-Form': { 
      
      return {...state,
        inputValues:[state.inputValueFirstName,state.inputValueLastName,state.inputValueEmail,state.inputValueMDP]}
        
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
    
        case 'ENTER_PASSWORD' : {
          console.log("password saisi")
          return {
            ...state,
            passwordState:{password:action.value}
          }
        } 
        case 'ENTER_EMAIL' : {
          console.log("mot de passe saisi")
          return {
            ...state,
            emailState:{email:action.value}
          }
        }
      case 'VALID_FORM' : {
          console.log("Validation du formulaire")
          return {
            ...state,
            passwordState:state.passwordState,
            emailState:state.emailState
          }
        } 

      case 'Persist-User' : {
        return{...state,currentUser:action.value}
      }
        case 'UPDATE_INPUT_VALUE': {
          return {
            ...state,
            recipes:action.value
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

/*            case 'CHECKED' : {
          console.log("cliqué !")
          return {
            ...state,
            buttonClass : event.target.className = "btn btn-success btn-lg btn-block fa fa-check-square disabled",
            textClass :  'blabla'}
        }     */
        case 'STOCK' : {
          console.log("cliqué !")
          return {
            ...state,
            marketList: {...ingredient}
          }
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
