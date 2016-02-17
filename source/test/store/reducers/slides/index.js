import test from 'tape';

import slides from 'store/reducers/slides';
test('..initial', assert => {
  const expected = 0;
  const actual = slides.activeId();
  assert.equal(expected, actual, 'should return initial state if no action is given.');
});
