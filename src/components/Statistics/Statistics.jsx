export const Statistics = ({ good, neutral, bad }) => (
  <>
    <h2>Please leave feedback</h2>
    <button>Good</button>
    <button>Neutral</button>
    <button>Bad</button>

    <h2>Statistics</h2>
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Total: {bad}</li>
    </ul>
  </>
);
