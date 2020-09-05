import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import App from './App';

/**
 * Create a ShallowWrapper for th GuessedWords component.
 * @function setup
 * @param {object} state - State for setup.
 * @returns {ShalloeWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

test('App renders without error', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'componentApp');
  expect(app.length).toBe(1);
});
