import React from 'react';
import { 
  TiArrowSortedDown,
  TiArrowSortedUp,
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
        <TiArrowSortedUp
          className="up-arrow-outline"
          onClick={this.handleUpvote}
        />
        <p className="voting-score">{this.state.votes}</p>
        <TiArrowSortedDown
          className="down-arrow-outline"
          onClick={this.handleDownvote}
        />
        <p className="total-user-votes">Votes: {this.state.totalVotes}</p>
      </div>
    );
  }

  // votingDisplay needs to be invoke before this method works
  indicateVote() {
    //if user has upvoted, we want to add a class that changes up-arrow-outline to orange
    let currentUserId = parseInt(this.props.currentUser.id);
    let userUpvoted = this.props.question.upvotes_user_id.includes(currentUserId);
    let userDownvoted = this.props.question.downvotes_user_id.includes(currentUserId);
    if (userUpvoted) {

    }
    //if user has downvoted, we want to do otherwise for down-arrow-outline

    //else, we leave alone
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