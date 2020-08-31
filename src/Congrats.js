import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component
 */
const Congrats = props => {
  const { success } = props;

  if (success) {
    return (
      <div data-test="componentCongrats">
        <span data-test="congratsMessage">Congratulations! You guessed the word!</span>
      </div>
    );
  } else {
    return <div data-test="componentCongrats"></div>;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool,
};

export default Congrats;
