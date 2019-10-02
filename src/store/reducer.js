const initialState = {
  recipes:[],
  recipe:[]

};

const defaultAction = {};

const reducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
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
