import React from 'react';
import { validateIntegerProp } from 'components/tools/validateIntegerProp';

function Stats({ good, neutral, bad }) {
  const total = good + neutral + bad;
  const positivePercent = `${Math.floor((good / total) * 100)}%`;

  return (
    <>
      <h4>Stats</h4>
      {total ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercent}</li>
        </ul>
      ) : (
        <p>No Feedback</p>
      )}
    </>
  );
}

Stats.propTypes = {
  good: validateIntegerProp,
  neutral: validateIntegerProp,
  bad: validateIntegerProp,
};

export default Stats;
