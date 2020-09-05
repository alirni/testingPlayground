import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const { success, secretWord } = props;
  const [currentGuess, setCurrentGuess] = React.useState('');

  // const submitGuessedWord = event => {
  //   const { guessWord } = this.props;
  //   const { currentGuess } = this.state;
  //   event.preventDefault();
  //   if (currentGuess && currentGuess.length > 0) {
  //     guessWord(currentGuess);
  //     this.setState({ currentGuess: '' });
  //   }
  // };

  const contents = success ? null : (
    <form>
      <input
        data-test="inputBox"
        type="text"
        placeholder="enter guess"
        value={currentGuess}
        onChange={event => setCurrentGuess(event.target.value)}
      />
      <button data-test="submitButton" type="submit">
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
