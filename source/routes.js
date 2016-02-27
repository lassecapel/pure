import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* container components */
import createApp from './containers/App';
import createDeck from './containers/Deck';
import createPresenter from './containers/Presenter';

const App = createApp(React);
const Deck = createDeck(React);
const Presenter = createPresenter(React);

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Deck} />
    <Route path="/slides/:slideId" component={Presenter} />
  </Route>
);

export default routes;
