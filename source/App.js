import createTitle from 'components/title';
import createHello from 'components/hello';
import createControls from 'components/controls';
import Presenter from 'components/presenter';
import createSlide from 'components/slide';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';

import hello from 'store/reducers/hello';

const reducer = combineReducers(Object.assign({}, hello, {
  routing: routeReducer,
}));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

// const store = createStore(hello);

store.subscribe(() => {
  console.log(store.getState());
});

export default React => ({ ...props }) => {
  const Slide = createSlide(React);
  return (
    <Provider store={store} >
      <Router history={browserHistory}>
        <Route path="/" component={Presenter}>
          <Route path="slides/:slideId" component={Slide}></Route>
        </Route>
      </Router>
    </Provider>
  );
};
