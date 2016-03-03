import test from 'tape';
import slides from 'store/reducers/slides';

const setup = () => [
  {
    sid: 1,
    title: 'Change me..',
    text: 'Lorem ipsum __dolor__ sit amet, consectetur adipiscing elit. Aliquam sollicitudin dictum enim sed convallis. Pellentesque viverra justo sit amet nibh malesuada, dictum mattis orci mollis. Nunc ut lectus in ex lobortis suscipit.'
  }
];

test('slides', nest => {
  nest.test('...initial', assert => {
    const expected = [];
    const actual = slides(undefined, {type: 'NO_ACTION'});
    assert.deepEqual(expected, actual, 'should return initial state if no action is given.');
    assert.end();
  });

  nest.test('ADD_SLIDE', assert => {
    assert.true(true);
    assert.end();
  });
});
