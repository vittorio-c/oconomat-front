/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link,Redirect} from "react-router-dom";



/**
 * Local import
 */
import AppContainer from 'src/components/App';
import kastore from 'src/store';

/**
 * Code
 */ 


const reactRootElement =<Router><Provider store={kastore}>
  <AppContainer />
</Provider></Router>;


const renderingArea = document.querySelector('#root');
render(reactRootElement, renderingArea);
