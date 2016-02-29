import styles from './Header.css';
import { Link } from 'react-router';

export default React => ({onClick}) => {
  const startPresentation = (ev) => {
    ev.preventDefault();
    onClick();
  };

  return (
    <header className={styles.header}>
      <a className={styles.start} href="#" onClick={startPresentation}>
        start
      </a>
      <h1>
      <Link to="/" >Yarpa</Link>
      </h1>
    </header>
  );
};
