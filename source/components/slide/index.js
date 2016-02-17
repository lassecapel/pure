import createTitle from '../title';
import { PropTypes } from 'react';

export default React => {
  const Slide = (props, context) => {
    const Title = createTitle(React);
    const titleProps = {
      title: props.title,
      titleClass: 'titleClass'
    };
    console.log(props, context);
    return (
      <div className="slide">
        <Title {...titleProps} />
        <p>{props.text}</p>
        <small>Slide: {props.params.slideId}</small>
      </div>
    );
  };

  Slide.contextTypes = {
    store: PropTypes.object,
  };
  return Slide;
};
