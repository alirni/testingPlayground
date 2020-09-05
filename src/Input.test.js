import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import Input from './Input';

/**
 * Create a ShallowWrapper for th GuessedWords component.
 * @function setup
 * @param {object} props - Component props.
 * @returns {ShalloeWrapper}
 */
const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
};

test('renders conponent without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'componentInput');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' });
});

describe('state controlled input field', () => {
  const mockSetCurrentGuess = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });
  test('state update with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'inputBox');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('field is cleared upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submitButton');

    const mockEvent = { preventDefault() {} };
    submitButton.simulate('click', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});

// describe('render', () => {
//   describe('word has not been guessed', () => {
//     let wrapper;
//     beforeEach(() => {
//       const initialState = { success: false };
//       wrapper = setup(initialState);
//     });

//     test('renders conponent without error', () => {
//       const component = findByTestAttr(wrapper, 'componentInput');
//       expect(component.length).toBe(1);
//     });

//     test('renders input box', () => {
//       const inputBox = findByTestAttr(wrapper, 'inputBox');
//       expect(inputBox.length).toBe(1);
//     });

//     test('renders submit button', () => {
//       const submitButton = findByTestAttr(wrapper, 'submitButton');
//       expect(submitButton.length).toBe(1);
//     });
//   });

//   describe('word has been guessed', () => {
//     let wrapper;
//     beforeEach(() => {
//       const initialState = { success: true };
//       wrapper = setup(initialState);
//     });
//     test('renders conponent without error', () => {
//       const component = findByTestAttr(wrapper, 'componentInput');
//       expect(component.length).toBe(1);
//     });

//     test('dose not render input box', () => {
//       const inputBox = findByTestAttr(wrapper, 'inputBox');
//       expect(inputBox.length).toBe(0);
//     });

//     test('dose not render  submit button', () => {
//       const submitButton = findByTestAttr(wrapper, 'submitButton');
//       expect(submitButton.length).toBe(0);
//     });
//   });
// });

// describe('redux props', () => {
//   test('has success piece of state as prop', () => {
//     const success = true;
//     const wrapper = setup({ success });
//     const successProp = wrapper.instance().props.success;
//     expect(successProp).toBe(success);
//   });

//   test('`guessWord` action creator is a function prop', () => {
//     const wrapper = setup();
//     const guessWordProp = wrapper.instance().props.guessWord;
//     expect(guessWordProp).toBeInstanceOf(Function);
//   });
// });

// describe('`guessWord` action creator call', () => {
//   let guessWordMock;
//   let wrapper;
//   const guessedWord = 'train';

//   beforeEach(() => {
//     // set up mock for `guessWord`
//     guessWordMock = jest.fn();

//     const props = {
//       guessWord: guessWordMock,
//     };

//     //set up app component with guessWordMock as the guessWord prop
//     wrapper = shallow(<UnconnectedInput {...props} />);

//     // add value to inputbox
//     wrapper.setState({ currentGuess: guessedWord });

//     // simulate clicked
//     const submitButton = findByTestAttr(wrapper, 'submitButton');
//     submitButton.simulate('click', { preventDefault() {} });
//   });

//   test('calls `guessWord` wen button clicked', () => {
//     const guessWordCallCount = guessWordMock.mock.calls.length;
//     expect(guessWordCallCount).toBe(1);
//   });

//   test('calls `guessWord` with input value as argument', () => {
//     const guessWordArg = guessWordMock.mock.calls[0][0];
//     expect(guessWordArg).toBe(guessedWord);
//   });

//   test('input box clears on submit', () => {
//     expect(wrapper.state('currentGuess')).toBe('');
//   });
// });
