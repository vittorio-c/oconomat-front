const initialState = {
  recipes:[],
  recipe:[],
  emailState:'',
  passwordState:'',
  connectedUser : false,
  tokkenUser :{}
};

const defaultAction = {};

const reducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {

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
