import 'materialize-css/dist/css/materialize.min.css';//materilize css
import React from 'react'; // react 
import ReactDOM from 'react-dom'; // react render dom
import { Provider } from 'react-redux'; // provider for react redux
import { createStore, applyMiddleware } from 'redux'; // middleware and store from redux
import reduxThunk from 'redux-thunk'; // redux thunk middleware

import App from './components/App'; // component app
import reducers from './reducers'; //reducer component
 
import axios from 'axios'; //export axios for action center
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
