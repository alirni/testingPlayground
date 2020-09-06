import React from 'react';
import { mount } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import hookActions from './actions/hookActions';
import App from './App';

const mockGetSecretWord = jest.fn();

/**
 * Create a ReactWrapper for the App component.
 * @function setup
 * @returns {ReactWrapper}
 */
const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  // use mount, because useEffect not called on `shallow`
  return mount(<App />);
};

test('App renders without error', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'componentApp');
  expect(app.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on app mount', () => {
    setup();

    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on App update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    //  wrapper.update() doesn't triger update
    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});
