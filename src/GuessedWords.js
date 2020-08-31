import { func } from 'prop-types';

import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
  const { guessedWords } = props;
  let contents;
  if (guessedWords.length === 0) {
    contents = <span data-test="guessInstructions">Try to guess the secret word!</span>;
  } else {
    const guessedWordsRows = guessedWords.map((word, index) => (
      <tr data-test="guessedWord" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessedWords">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
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
