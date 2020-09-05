import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input, { UnconnectedInput } from './Input';

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

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('`guessWord` action creator call', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';

  beforeEach(() => {
    // set up mock for `guessWord`
    guessWordMock = jest.fn();

    const props = {
      guessWord: guessWordMock,
    };

    //set up app component with guessWordMock as the guessWord prop
    wrapper = shallow(<UnconnectedInput {...props} />);

    // add value to inputbox
    wrapper.setState({ currentGuess: guessedWord });

    // simulate clicked
    const submitButton = findByTestAttr(wrapper, 'submitButton');
    submitButton.simulate('click', { preventDefault() {} });
  });

  test('calls `guessWord` wen button clicked', () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test('calls `guessWord` with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });

  test('input box clears on submit', () => {
    expect(wrapper.state('currentGuess')).toBe('');
  });
});
