import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistory, routeReducer } from 'react-router-redux';
import * as reducers from './reducers';

export function configureStore (history, initialState) {

  const reducer = combineReducers({
    ...reducers,
    routing: routeReducer,
  });

  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistory(history);
  const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

  const store = createStoreWithMiddleware(reducer);

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  return store;
};
