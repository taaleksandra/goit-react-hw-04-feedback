import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from '../Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <span className={clsx(css.statdesc)}>Good: {good}</span>
    <span className={clsx(css.statdesc)}>Neutral: {neutral}</span>
    <span className={clsx(css.statdesc)}>Bad: {bad}</span>
    <span className={clsx(css.statdesc)}>Total: {total}</span>
    <span className={clsx(css.statdesc)}>
      Positive feedback: {positivePercentage}%
    </span>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
