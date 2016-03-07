import test from 'tape';
import slides from 'store/reducers/slides';
import { ADD_SLIDE, EDIT_SLIDE } from 'store/constants/action_types';


const setup = () => [
  {
    id: 0,
    title: 'Change me..',
    text: 'Lorem ipsum __dolor__ sit amet'
  }
];

test('slides', nest => {
  nest.test('...initial', assert => {
    const expected = [];
    const actual = slides(undefined, {type: 'NO_ACTION'});
    assert.deepEqual(expected, actual, 'should return initial state if no action is given.');
    assert.end();
  });

  nest.test('ADD_SLIDE with parameters', assert => {
    const expected = setup();
    const actual = slides(undefined, {
      type: ADD_SLIDE,
      title: 'Change me..',
      text: 'Lorem ipsum __dolor__ sit amet'
    });
    assert.deepEqual(actual, expected, 'should return slide with given parameters');
    assert.end();
  });

  nest.test('ADD_SLIDE without parameters', assert => {
    const expected = [{id: 0, title: undefined, text: undefined }];
    const actual = slides(undefined, {type: ADD_SLIDE});
    assert.deepEqual(actual, expected, 'should add slide without parameters');
    assert.end();
  });

  nest.test('EDIT_SLIDE without parameters', assert => {
    const expected = setup();
    const actual = slides(setup(), {type: EDIT_SLIDE});
    assert.deepEqual(actual, expected, 'should return state without modified slides');
    assert.end();
  });

  nest.test('EDIT_SLIDE with updated parameter', assert => {
    const expected = [{id: 0, title: 'new title', text: 'Lorem ipsum __dolor__ sit amet' }];
    const actual = slides(setup(), {type: EDIT_SLIDE, id: 0, title: 'new title', text: 'Lorem ipsum __dolor__ sit amet'});
    assert.deepEqual(actual, expected, 'should return state with updated slide');
    assert.end();
  });

  nest.test('EDIT_SLIDE without id', assert => {
    const expected = setup();
    const actual = slides(setup(), {type: EDIT_SLIDE, title: 'new title'});
    assert.deepEqual(actual, expected, 'should not return a updated slide');
    assert.end();
  });
});
