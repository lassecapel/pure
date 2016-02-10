import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import createControls from 'components/hello';
import createActions from 'test-fixtures/components/controls/create-actions';

const Controls = createControls(React);
test('Controls', nest => {
  nest.test('...with no parameters', assert => {
    const actual = '';
    const expected = '';
    const msg = 'ok';
    assert.equal(actual, expected, msg);

    assert.end();
  });
});
