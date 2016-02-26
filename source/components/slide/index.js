import createTitle from '../title';
import createContent from '../content';
import { PropTypes } from 'react';

export default React => {
  const Slide = (props, context) => {
    const Title = createTitle(React);
    const Content = createContent(React);
    const titleProps = {
      title: props.title,
      titleClass: 'titleClass'
    };
    const contentProps = {
      text: props.text
    };

    console.log(props, context);
    return (
      <div>
        <Title {...titleProps} />
        <Content {...contentProps} />
        <small>Slide: {props.id}</small>
      </div>
    );
  };

  Slide.contextTypes = {
    store: PropTypes.object,
  };
  return Slide;
};
