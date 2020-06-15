import React from 'react';
import { 
  TiArrowDownOutline,
  TiArrowDownThick,
  TiArrowUpOutline,
  TiArrowUpThick
} from 'react-icons/ti';


class QuestionVotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: this.props.question.id,
      votes: this.props.question.upvotes - this.props.question.downvotes,
      totalVotes: this.props.question.upvotes + this.props.question.downvotes
    }
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleUpvote(e) {
    e.preventDefault();
    this.props.createUpvote(this.state.questionId, 0)
      .then(() => {
        return this.setState({
          votes: this.props.question.upvotes - this.props.question.downvotes,
          totalVotes: this.props.question.upvotes + this.props.question.downvotes
        })
      });
  }

  handleDownvote(e) {
    e.preventDefault();
    this.props.createDownvote(this.state.questionId, 0)
      .then(() => {
        return this.setState({
          votes: this.props.question.upvotes - this.props.question.downvotes,
          totalVotes: this.props.question.upvotes + this.props.question.downvotes
        })
      });
  }

  votingDisplay() {
    // if user hasn't voted yet
    return (
      <div className="voting">
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
    );
  }
}

export default QuestionVotes;