import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from '../Feedback/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsState = Object.keys(options);

  return (
    <div className={clsx(css.buttons)}>
      {optionsState.map(option => (
        <button
          key={option}
          onClick={onLeaveFeedback}
          type="button"
          className={clsx(css.btn)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTyes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
