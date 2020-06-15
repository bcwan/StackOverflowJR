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
      answerId: this.props.answer.id,
      votes: this.props.answer.upvotes - this.props.answer.downvotes,
      totalVotes: this.props.answer.upvotes + this.props.answer.downvotes
    };
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleUpvote(e) {
    e.preventDefault();
    this.props.createAnswerUpvote(this.state.questionId, this.state.answerId)
      .then(() => {
        return this.setState({
          votes: this.props.answer.upvotes - this.props.answer.downvotes,
          totalVotes: this.props.answer.upvotes + this.props.answer.downvotes
        })
      });
  }

  handleDownvote(e) {
    e.preventDefault();
    this.props.createAnswerDownvote(this.state.questionId, this.state.answerId)
      .then(() => {
        return this.setState({
          votes: this.props.answer.upvotes - this.props.answer.downvotes,
          totalVotes: this.props.answer.upvotes + this.props.answer.downvotes
        })
      });
  }


  votingDisplay() {
    return (
      <div className="voting answer-voting">
        <TiArrowUpOutline
          className="up-arrow-outline"
          onClick={this.handleUpvote}
        />
        <p className="voting-score">{this.state.votes}</p>
        <TiArrowDownOutline
          className="down-arrow-outline"
          onClick={this.handleDownvote}
        />
        <p className="total-user-votes">Votes: {this.state.totalVotes}</p>
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