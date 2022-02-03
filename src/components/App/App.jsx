import React from 'react';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Sections/Sections';
import s from './App.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increasesCounter = evn => {
    this.setState(prevState => {
      if (evn.target.id === 'good') {
        return { good: prevState.good + 1 };
      }
      if (evn.target.id === 'neutral') {
        return { neutral: prevState.neutral + 1 };
      }
      if (evn.target.id === 'bad') {
        return { bad: prevState.bad + 1 };
      }
      this.countTotalFeedback();
    });
  };
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.ceil(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100,
    );
    return positivePercentage;
  };

  render() {
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.increasesCounter} />
        </Section>
        <Section>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              total={this.countTotalFeedback}
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
