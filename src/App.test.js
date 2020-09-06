import React from 'react';
import { mount } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import hookActions from './actions/hookActions';
import App from './App';

const mockGetSecretWord = jest.fn();

/**
 * Create a ReactWrapper for the App component.
 * @function setup
 * @param {string} secretWord
 * @returns {ReactWrapper}
 */
const setup = (secretWord = 'party') => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn().mockReturnValue([{ secretWord }, jest.fn()]);

  React.useReducer = mockUseReducer;

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

describe('secretWord is not null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup('party');
  });

  test('renders App when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'componentApp');
    expect(appComponent.exists()).toBe(true);
  });

  test('does not render spinner when secretWord is not null', () => {
    const spinner = findByTestAttr(wrapper, 'spinner');
    expect(spinner.exists()).toBe(false);
  });
});

describe('secretWord is null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  });

  test('does not render App when secretWord is null', () => {
    const appComponent = findByTestAttr(wrapper, 'componentApp');
    expect(appComponent.exists()).toBe(false);
  });

  test('renders spinner when secretWord is null', () => {
    const spinner = findByTestAttr(wrapper, 'spinner');
    expect(spinner.exists()).toBe(true);
  });
});
