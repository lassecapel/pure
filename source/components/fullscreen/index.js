import screenfull from 'screenfull';
import style from './Fullscreen.css';

export default React => (props) => {
  const closeFullscreen = () => {
    if (!screenfull.isFullscreen) {
      console.log('dispatch not fullscreen annymore');
      props.onExitFullscreen();
      document.removeEventListener(screenfull.raw.fullscreenchange, closeFullscreen, false);
    }
  };

  const toggleFullscreen = (elem) => {
    if (props.isFullscreen) {
      if (screenfull.enabled && !screenfull.isFullscreen) {
        screenfull.request(elem);
        document.addEventListener(screenfull.raw.fullscreenchange, closeFullscreen, false);
      }
    }
  };

  return (
    <div className={ props.isFullscreen && style.fullscreen } ref={ node => node && toggleFullscreen(node) }>
      {props.children}
    </div>
  );
};
