import { Link } from 'react-router';

export default React => {
  const {
    string, number
  } = React.PropTypes;

  const controls = ({ controlsClass, prevId, nextId}) => {
    return (
      <div className={controlsClass}>
        <ul>
          <li><Link to={`/slides/${prevId}`}>prev</Link></li>
          <li><Link to={`/slides/${nextId}`}>next</Link></li>
        </ul>
      </div>
    );
  };

  controls.propTypes = {
    controlsClass: string.isRequired,
    nextId: number,
    prevId: number
  };

  return controls;
};
