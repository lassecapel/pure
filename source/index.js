import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import { configureStore } from './store';
import routes from './routes';

let state = window.__initialState__ || undefined; // eslint-disable-line no-underscore-dangle
const store = configureStore(browserHistory, state);
const mount = document.getElementById('root');

console.log('store: ', store.getState());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  mount
);
