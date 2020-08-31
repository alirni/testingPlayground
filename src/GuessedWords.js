import { func } from 'prop-types';

import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
  const { guessedWords } = props;
  let contents;
  if (guessedWords.length === 0) {
    contents = <span data-test="guessInstructions">Try to guess the secret word!</span>;
  }
  return <div data-test="componentGuessedwords">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default GuessedWords;
