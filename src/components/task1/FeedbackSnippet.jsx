import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Stats from './Stats';

const style = {
  width: '300px',
  border: '1px solid black',
  borderRadius: '4px',
  padding: '10px',
  margin: '10px',
};

export class FeedbackSnippet extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div style={style}>
        <h3>{this.props.name}</h3>
        <p>How do you feel about the service?</p>
        <div>
          <button onClick={() => this.handleFeedback('good')}>Good</button>
          <button onClick={() => this.handleFeedback('neutral')}>
            Neutral
          </button>
          <button onClick={() => this.handleFeedback('bad')}>Bad</button>
        </div>
        <Stats good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default FeedbackSnippet;
