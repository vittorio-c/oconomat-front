/**
 * Import
 */
import React from 'react';
import { connect } from 'react-redux';

/**
 * Local import
 */
// Composants enfants éventuels
import ClicCounter from 'src/components/ClicCounter';

// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = ({ greeting, handleChange }) => (
  <div id="app">
    <h1 id="app-title">Modèle React</h1>
    <input
      type="text"
      id="app-content"
      value={greeting}
      onChange={handleChange}
    />
    <ClicCounter label="Clic-me!" />
  </div>
);

/**
 * Export
 */

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
