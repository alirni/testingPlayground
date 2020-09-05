import React from 'react';

const Input = props => {
  const { success } = props;

  // const submitGuessedWord = event => {
  //   const { guessWord } = this.props;
  //   const { currentGuess } = this.state;
  //   event.preventDefault();
  //   if (currentGuess && currentGuess.length > 0) {
  //     guessWord(currentGuess);
  //     this.setState({ currentGuess: '' });
  //   }
  // };

  // const { currentGuess } = this.state;
  const contents = success ? null : (
    <form>
      <input
        data-test="inputBox"
        type="text"
        placeholder="enter guess"
        // value={currentGuess}
        onChange={event => this.setState({ currentGuess: event.target.value })}
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

export default Input;
