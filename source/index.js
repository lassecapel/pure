import React from 'react';
import { render } from 'react-dom';
import createApp from './App';

/* generic styles */
import styles from './styles/base.css';
import normalize from './styles/normalize.css';
Object.assign(styles, normalize);

const App = createApp(React);

render(
  <App></App>,
  document.getElementById('root')
);
