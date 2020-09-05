import React from 'react';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
// import { getSecretWord } from './actions';

const App = () => {
  // const { success, guessedWords, secretWord } = this.props;
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
