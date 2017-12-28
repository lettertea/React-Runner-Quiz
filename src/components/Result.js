import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

class Result extends Component {

  render() {
  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={400}
      transitionAppear
      transitionAppearTimeout={400}
    >
      <div>
        <strong>{this.props.quizResult}</strong>!
        <br /> <br />
        <button className="button" onClick={this.props.repeatQuiz}>Take the quiz again?</button>
      </div>
    </ReactCSSTransitionGroup>
  );
}
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
