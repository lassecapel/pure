import { Link } from 'react-router';
import { connect } from 'react-redux';
import createHeader from '../components/header';
import {SET_FULLSCEEN} from '../store/constants/modes';
import { push } from 'react-router-redux';

/* generic styles */
import base from '../styles/base.css';
import normalize from '../styles/normalize.css';
import style from './App.css';
Object.assign({}, base, normalize);

export default React => {

  function App ({ children, dispatch, showHeader}) {
    const Header = createHeader(React);
    const startPresentation = () => {
      dispatch(push('/slides/1'));
      console.log('komt hier');
      dispatch({type: SET_FULLSCEEN, fullscreen: true});
    };


    return (
      <div className={style.app}>
        {showHeader && <Header onClick={startPresentation} />}
        <main className={style.main}>
          {children}
        </main>
      </div>
    );
  }

  const mapStateToProps = state => { return {showHeader: !state.modes.fullscreen };};
  return connect(mapStateToProps)(App);
};
