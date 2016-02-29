import keycode from 'keycode';
export default React => (next, prev) => {
  const handleKeyup = (ev) => {
    const nextKeys = ['up', 'right', 'w', 'd', 'l', 'k'];
    const prevKeys = ['down', 'left', 's', 'a', 'h', 'j'];

    if (nextKeys.indexOf(keycode(ev)) > -1) {
      next();
      console.log('next');
      return;
    }
    if (prevKeys.indexOf(keycode(ev)) > -1) {
      prev();
      console.log('prev');
      return;
    }
  };

  window.addEventListener('keyup', handleKeyup); // unbind this onLeavefullscreen
  return (
    <div/>
  );
};
