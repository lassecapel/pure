import { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './Deck.css';
import { Link } from 'react-router';
import { ADD_SLIDE } from '../../store/constants/action_types';

export default React => {
  const Deck = ({slides, dispatch}) => {
    const onClick = () => dispatch({type: ADD_SLIDE});

    const renderSlides = slides.map( (slide) => {
      return (
        <div key={slide.id} className={styles.slide}>
          <Link to={`/slides/${slide.id}`}>
            <h2>{slide.title}</h2>
          </Link>
        </div>
      );
    });

    return (
      <div className={styles.deck}>
        { renderSlides }
        <div onClick= { onClick } className={styles.addSlide}>
          <h2>+</h2>
        </div>
      </div>
    );
  };

  const mapStateToProps = (state) => {
    return {
      slides: state.slides
    };
  };

  Deck.propTypes = {
    slides: PropTypes.array.isRequired
  };

  return connect(mapStateToProps)(Deck);
};
