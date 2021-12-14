import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul className={s.listStatistics}>
        <li className={s.itemStatistics}>
          <p>
            Good: <span>{good}</span>
          </p>
        </li>
        <li className={s.itemStatistics}>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
        </li>
        <li className={s.itemStatistics}>
          <p>
            Bad: <span>{bad}</span>
          </p>
        </li>
        <li className={s.itemStatistics}>
          <p>
            Total: <span>{String(total())}</span>
          </p>
        </li>
        <li className={s.itemStatistics}>
          <p>
            Positive feedback:{' '}
            <span>
              {String(positivePercentage()) === 'NaN'
                ? 100
                : String(positivePercentage())}
              %
            </span>
          </p>
        </li>
      </ul>
    </>
  );
};

export default Statistics;
