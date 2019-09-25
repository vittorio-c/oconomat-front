import React from 'react';

/**
 * Exemple de composant à état (stateful component).
 */
export default class extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     counter: 0
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   // ...
  // }


  // On peut faire plus simple avec @babel/plugin-proposal-class-properties :

  state = {
    counter: 0
  }  

  setCounter = (count) => {
    this.setState({
      counter: count
    });
  }

  increment = (event) => {
    console.log(event);
    this.setCounter(this.state.counter + 1);
  }

  reset = (event) => {
    console.log(event);
    this.setCounter(0);
  }

  render() {
    console.log('rendering - state:', this.state);
    const { label } = this.props;
    const { counter } = this.state;
    return [
      <button onClick={this.increment}>{label} ({counter})</button>,
      <button onClick={this.reset}>RESET</button>
    ]
  }
}
