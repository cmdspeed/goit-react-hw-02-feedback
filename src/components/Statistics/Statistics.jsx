export const Statistics = ({ good, neutral, bad, total, positive }) => (
  <>
    <h2>Please leave feedback</h2>
    <button>Good</button>
    <button>Neutral</button>
    <button>Bad</button>

    <h2>Statistics</h2>
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  </>
);
