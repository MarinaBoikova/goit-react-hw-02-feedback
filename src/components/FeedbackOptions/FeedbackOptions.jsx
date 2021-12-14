import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={s.listFeedback}>
      <li className={s.itemFeedback}>
        <button id="good" onClick={onLeaveFeedback} type="button">
          Good
        </button>
      </li>
      <li className={s.itemFeedback}>
        <button id="neutral" onClick={onLeaveFeedback} type="button">
          Neutral
        </button>
      </li>
      <li className={s.itemFeedback}>
        <button id="bad" onClick={onLeaveFeedback} type="button">
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
