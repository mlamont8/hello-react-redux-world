import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import HelloReducer from './reducers/HelloReducer'
import AppContainer from './components/AppContainer';
import './index.css';

console.log('from index.js');
const store = createStore(
  HelloReducer,   {text: 'Initial value from createStore'},
  //For redux Chrome Tools Extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
 <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
