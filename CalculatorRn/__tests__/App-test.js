/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Test my function btnPressed ', () => {

  it('snapshot Testing App component', () => {
    const myfunction = renderer.create(<App />).toJSON
    expect(myfunction).toMatchSnapshot();
  })

});

