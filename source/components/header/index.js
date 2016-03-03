import styles from './Header.css';
import { Link } from 'react-router';
import createStartButton from '../startButton';

export default React => ({startPresentationFn, showStart}) => {
  const startPresentation = (ev) => {
    ev.preventDefault();
    startPresentationFn();
  };

  const StartButton = createStartButton(React);

  return (
    <header className={styles.header}>
      {showStart && <StartButton startFn={startPresentation}/>}
      <h1>
      <Link to="/" >Yarpa</Link>
      </h1>
    </header>
  );
};
