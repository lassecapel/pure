import screenfull from 'screenfull';

// function ComponentWithInput({ inputRef }) {
//   return <div><input ref={inputRef} /></div>
// }
//
// function Parent() {
//   return <ComponentWithInput inputRef={input => input && input.scrollIntoView()} />
// }


export default React => (props) => {
  let fsEl;

  const closeFullscreen = () => {
    if (!screenfull.isFullscreen) {
      console.log('dispatch not fullscreen annymore');
      props.onExitFullscreen();
      document.removeEventListener(screenfull.raw.fullscreenchange, closeFullscreen, false);
    }
  };

  const toggleFullscreen = (fullscreen, onExit, elem) => {
    if (fullscreen) {
      if (screenfull.enabled && !screenfull.isFullscreen) {
        console.log("hier wordt de shit disabled", fsEl);
        screenfull.request(fsEl);
        document.addEventListener(screenfull.raw.fullscreenchange, closeFullscreen, false);
      }
    }
  };

  toggleFullscreen(props.isFullscreen, fsEl);
  return (
    <div ref={ node => {fsEl = node;}}>
      {props.children}
    </div>
  );
};
