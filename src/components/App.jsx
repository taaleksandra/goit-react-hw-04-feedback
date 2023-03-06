import React, { useState } from 'react';
import clsx from 'clsx';

import css from '../components/Feedback/Feedback.module.css';

import { Section } from '../components/Section/Section';
import { Statistics } from '../components/Statistics/Statistics';
import { FeedbackOptions } from '../components/Feedback/FeedbackOptions';
import { Notification } from '../components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  const options = { good, neutral, bad };

  const handleFeedback = evt => {
    const btnName = evt.currentTarget.textContent;
    btnName === 'good' && setGood(good + 1);
    btnName === 'neutral' && setNeutral(neutral + 1);
    btnName === 'bad' && setBad(bad + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round((good * 100) / total);
    return total === 0 ? total : positiveFeedback;
  };

  return (
    <div className={clsx(css.feedback)}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification msg="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
