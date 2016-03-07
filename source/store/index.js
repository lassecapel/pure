import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { syncHistory, routeReducer } from 'react-router-redux';
import persistState from 'redux-localstorage';
import * as reducers from './reducers';


export function configureStore (history, initialState) {
  const finalReducer = combineReducers({
    ...reducers,
    routing: routeReducer,
  });

  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistory(history);
  const createStoreWithMiddleware = compose(
    persistState(),
    applyMiddleware(reduxRouterMiddleware),
    // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);

  const store = createStoreWithMiddleware(finalReducer, initialState);
  console.log('after createStore: ', store.getState());

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  return store;
}
