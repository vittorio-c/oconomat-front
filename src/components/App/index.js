import React from 'react';
import Footer from '../Footer/index.js';
import Inscription from '../SignUp/index.js'
import Connexion from '../SignIn/index.js';
import Recettes from '../Recettes/index.js';


<<<<<<< HEAD
const AppContainer=() =>{
    return (<div id="app"> <Connexion/> <Inscription/> <Recettes/>
    <Footer/> </div>)
}

export default AppContainer;
=======
/**
 * Local import
 */
// Composants enfants éventuels
import Home from 'src/components/Home';
import Objectives from 'src/components/Objectives';
import MarketList from 'src/components/MarketList';
// Styles et assets
import './app.sass'; 

/**
 * Code
 */
const App = ({}) => (
  <div className="container-fluid">
  <Home />
  <Objectives />
  <MarketList />

  </div>
)

// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      greeting: state.greetingMessage
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
      handleChange: (event) => {
        const action = { type: 'UPDATE_INPUT_VALUE', value: event.target.value };
        dispatch(action);
      }
    };
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const AppContainer = connectionStrategies(App);

// Étape 3 : on exporte le composant connecté qui a été généré
export default AppContainer;
>>>>>>> 46f544c8e46c86b85817ec5fd0ee7a0be8b58eaf
