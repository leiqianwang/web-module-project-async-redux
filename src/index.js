import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux'

import App from './App';
import './index.css';


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
 
     <React.StrictMode>
       <App />
     </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
