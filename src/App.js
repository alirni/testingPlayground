import React from 'react';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import hookActions from './actions/hookActions';

/**
 *
 * @param {object} state
 * @param {object} action - contains 'type' and 'payload' properties for state update
 * @example                 { type: 'setSecretWord', payload: 'party' }
 * @returns {object} - new state
 */
function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };

    default:
      throw new Error(`Invalid action typr: ${action.type}`);
  }
}

const App = () => {
  // const { success, guessedWords, secretWord } = this.props;
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = secretWord => dispatch({ type: 'setSecretWord', payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return (
    <div className="App" data-test="componentApp">
      <h1>Jotto</h1>
      {/* <Congrats success={success} />
      <Input />
      <GuessedWords guessedWords={guessedWords} /> */}
    </div>
  );
};

// const mapStateToProps = ({ success, guessedWords, secretWord }) => {
//   return { success, guessedWords, secretWord };
// };

export default App;
