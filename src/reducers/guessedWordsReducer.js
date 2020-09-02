import { actionTypes } from '../actions/index';

/**
 * @function guessedWordsReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - Action to be reduced.
 * @returns {array} - New guessedWords state.
 */
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
