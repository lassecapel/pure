import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { syncHistory, routeReducer } from 'react-router-redux';
import { persistentStore } from 'redux-pouchdb';
import * as reducers from './reducers';
import { db } from '../database';

export function configureStore (history, initialState) {
  window.db = db; // for debugging;

  const reducer = combineReducers({
    ...reducers,
    routing: routeReducer,
  });

  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistory(history);

  const createStoreWithMiddleware = compose(
    applyMiddleware(reduxRouterMiddleware),
    /*
    * https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related
    */
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    persistentStore(db),
  )(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);
  console.log(store.getState());

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  return store;
}
