import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const { success, secretWord, guessWord } = props;
  const [currentGuess, setCurrentGuess] = React.useState('');

  const submitGuessedWord = event => {
    event.preventDefault();
    // if (currentGuess && currentGuess.length > 0) {
    // guessWord(currentGuess);
    setCurrentGuess('');
    // }
  };

  const contents = success ? null : (
    <form>
      <input
        data-test="inputBox"
        type="text"
        placeholder="enter guess"
        value={currentGuess}
        onChange={event => setCurrentGuess(event.target.value)}
      />
      <button data-test="submitButton" type="submit" onClick={submitGuessedWord}>
        Submit
      </button>
    </form>
  );

  return <div data-test="componentInput">{contents}</div>;
};

// const mapStateToProps = ({ success }) => {
//   return { success };
// };

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
