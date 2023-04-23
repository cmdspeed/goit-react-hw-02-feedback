import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((option, index) => (
      <button
        className={css.feedbackBtn}
        key={index}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: propTypes.isRequired,
  onLeaveFeedback: propTypes.isRequired,
};
