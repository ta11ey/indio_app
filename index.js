import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Router } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import Create from './src/containers/Create.jsx';
import App from './src/App.js';
import './src/index.css';
import * as reducers from './src/reducers/index.js';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path='/' component={App}>
        <Route path="create" component={Create} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
