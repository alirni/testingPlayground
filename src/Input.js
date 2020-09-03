import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

class Input extends Component {
  render() {
    const { success } = this.props;
    const contents = success ? null : (
      <form>
        <input data-test="inputBox" type="text" placeholder="enter guess" />
        <button data-test="submitButton" type="submit">
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

export default connect(mapStateToProps, { guessWord })(Input);
