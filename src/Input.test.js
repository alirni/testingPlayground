import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const defaultProps = {};

/**
 * Create a ShallowWrapper for th GuessedWords component.
 * @function setup
 * @param {object} props - Component props.
 * @returns {ShalloeWrapper}
 */
const setup = (initialState = {}) => {
  // const setupProps = { ...defaultProps, ...props };
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />).dive();
};

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders conponent without error', () => {
      // const wrapper = shallow(<Input />);
      // const component = wrapper.find(`[data-test=""]`);
    });

    test('renders input box', () => {});

    test('renders submit button', () => {});
  });
  describe('word has been guessed', () => {
    test('renders conponent without error', () => {});

    test('dose not render input box', () => {});

    test('dose not render  submit button', () => {});
  });
});

describe('update state', () => {});
