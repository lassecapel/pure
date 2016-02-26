import { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './Home.css';
import { Link } from 'react-router';
export default React => {
  const Home = ({slides}) => {
    const renderSlides = slides.map( (slide) => {
      return (
        <li key={slide.id}>
          <Link to={`/slide/${slide.id}`}>
            <p className={styles.name}>{slide.title}</p>
          </Link>
        </li>
      );}
    );

    return (
      <div className={styles.home}>
        <div className={styles.list}>
          <ul>{ renderSlides }</ul>
        </div>
      </div>
    );
  };

  const mapStateToProps = (state) => {
    console.log('state in home', state);
    return {
      slides: state.slides
    };
  };

  Home.propTypes = {
    slides: PropTypes.array.isRequired
  };

  return connect(mapStateToProps)(Home);
};
