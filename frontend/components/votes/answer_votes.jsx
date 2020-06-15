import React from 'react';
import {
  TiArrowDownOutline,
  TiArrowDownThick,
  TiArrowUpOutline,
  TiArrowUpThick
} from 'react-icons/ti';

class AnswerVotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: this.props.questionId,
      answer: this.props.answer.id,
      votes: this.props.answer.upvotes - this.props.answer.downvotes,
      totalVotes: this.props.answer.upvotes + this.props.answer.downvotes
    };
  }

  votingDisplay() {
    return (
      <div className="voting answer-voting">
        <TiArrowUpOutline
          className="up-arrow-outline"
        // onClick={this.handleUpvote}
        />
        <p className="voting-score">100{/*this.state.votes*/}</p>
        <TiArrowDownOutline
          className="down-arrow-outline"
        // onClick={this.handleDownvote}
        />
        <p className="total-user-votes">Votes: 1{/*this.state.totalVotes*/}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.votingDisplay()}
      </div>
    )
  }
}

export default AnswerVotes;