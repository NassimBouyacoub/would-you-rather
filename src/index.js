import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducers from './Reducers/index'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logger from './middleware/logger';
import { render } from '@testing-library/react';
export const store = createStore(reducers, applyMiddleware(thunk, logger))

render(
  <Provider store={store}>
    <App/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
