import createPresenter from 'components/presenter';
import { Provider } from 'react-redux';
import { Redirect, Router, Route, browserHistory } from 'react-router';
import * as reducers from './store/reducers';
import configureStore from './store';

const store = configureStore(reducers);
console.log('store: ', store.getState());

store.subscribe(() => {
  console.log(store.getState());
});


export default React => () => {
  const Presenter = createPresenter(React);
  const firstSlideId = store.getState().slides[0].id;

  return (
    <Provider store={store} >
      <Router history={browserHistory}>
        <Redirect from='/' to={`slides/${firstSlideId}`} />
        <Route path="slides/:slideId" component={Presenter}></Route>
      </Router>
    </Provider>
  );
};
