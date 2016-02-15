import createPresenter from 'components/presenter';
import createSlide from 'components/slide';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';

import slideReducer from 'store/reducers/slides';
import { ADD_SLIDE } from 'store/constants/action_types';

const reducer = combineReducers(Object.assign({}, {
  slides: slideReducer,
  routing: routeReducer,
}));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

store.subscribe(() => {
  console.log(store.getState());
});

const content = {
  title: 'slide2',
  text: 'this is slide #2'
};

console.log(ADD_SLIDE);

store.dispatch({ type: ADD_SLIDE, ...content });

console.log('after dispatch', store.getState());

export default React => () => {
  const Slide = createSlide(React);
  const Presenter = createPresenter(React);
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
