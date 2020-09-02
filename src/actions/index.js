export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

// /**
//  * @function correctGuess
//  * @returns {object} - Action object with type `CORRECT_GUESS`
//  */
// export function correctGuess() {
//   return {
//     type: actionTypes.CORRECT_GUESS,
//   };
// }

/**
 * Returns Redux Thunk function that dispatches `GUESS_WORD` action and (conditionally) `CORRECT_GUESS` action
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = guessedWord => {
  return function(dispatch, getState) {};
};
