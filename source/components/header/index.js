import styles from './Header.css';
import { Link } from 'react-router';
import { MdChat } from 'react-icons/md';

export default React => ({onClick}) => {
  const startPresentation = (ev) => {
    ev.preventDefault();
    onClick();
  };

  return (
    <header className={styles.header}>
      <a className={styles.start} href="#" onClick={startPresentation}>
        <MdChat /> start
      </a>
      <h1>
      <Link to="/" >Pure</Link>
      </h1>

    </header>
  );
};
