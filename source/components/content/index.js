import marked from 'marked';
import {isEmpty} from 'lodash';

const formatText = (text) => {
  if (isEmpty(text)) {
    return {__html: '<p>please add some content</p>'};
  }
  return {__html: marked(text) };
};

export default React => ({ text }) => {
  return ( <div dangerouslySetInnerHTML={ formatText(text) } /> );
};
