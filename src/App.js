import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { getSecretWord } from './actions';

export class UnConnectedApp extends Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    const { success, guessedWords, secretWord } = this.props;
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnConnectedApp);
