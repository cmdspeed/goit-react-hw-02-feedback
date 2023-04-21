export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((option, index) => (
      <button key={index}>{option}</button>
    ))}
  </>
);
