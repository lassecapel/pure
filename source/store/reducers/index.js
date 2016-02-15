import { combineReducers } from 'redux';
import slides from './slides';
import hello from './hello';

const rootReducer = combineReducers({
  slides,
  hello
});

export default rootReducer;
