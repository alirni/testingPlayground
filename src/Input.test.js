import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Create a ShallowWrapper for th GuessedWords component.
 * @function setup
 * @param {object} props - Component props.
 * @returns {ShalloeWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />)
    .dive()
    .dive();
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('renders conponent without error', () => {
      const component = findByTestAttr(wrapper, 'componentInput');
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'inputBox');
      expect(inputBox.length).toBe(1);
    });

    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submitButton');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test('renders conponent without error', () => {
      const component = findByTestAttr(wrapper, 'componentInput');
      expect(component.length).toBe(1);
    });

    test('dose not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'inputBox');
      expect(inputBox.length).toBe(0);
    });

    test('dose not render  submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submitButton');
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('update state', () => {});
