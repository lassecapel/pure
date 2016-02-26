import styles from './Header.css';
import { Link } from 'react-router';

export default React => () => {
  return (
    <header>
      <Link to="/" />
      <div className={styles.header}>
        <div className={styles.wrapper}>
            <div className={styles.react}>
              <div className={styles.inner}></div>
              <div className={styles.innerdot}></div>
            </div>
        </div>
      </div>
    </header>
  );
};
