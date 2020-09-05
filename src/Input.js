import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGuess: null,
    };
  }

  submitGuessedWord = event => {
    const { guessWord } = this.props;
    const { currentGuess } = this.state;
    event.preventDefault();
    if (currentGuess && currentGuess.length > 0) {
      guessWord(currentGuess);
    }
  };

  render() {
    const { success } = this.props;
    const { currentGuess } = this.state;
    const contents = success ? null : (
      <form>
        <input
          data-test="inputBox"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={event => this.setState({ currentGuess: event.target.value })}
        />
        <button data-test="submitButton" type="submit" onClick={this.submitGuessedWord}>
          Submit
        </button>
      </form>
    );

    return <div data-test="componentInput">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
