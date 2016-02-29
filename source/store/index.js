import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { syncHistory, routeReducer } from 'react-router-redux';
import { persistentStore } from 'redux-pouchdb';
import * as reducers from './reducers';
import { db } from '../database';

export function configureStore (history, initialState) {
  window.x = db;

  const reducer = combineReducers({
    ...reducers,
    routing: routeReducer,
  });

  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistory(history);

  const createStoreWithMiddleware = compose(
    applyMiddleware(reduxRouterMiddleware),
    persistentStore(db),
  )(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);
  console.log(store.getState());

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  return store;
}
