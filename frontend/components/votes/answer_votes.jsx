import React from 'react';
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
} from 'react-icons/ti';
import ReactGA from 'react-ga'

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
    this.indicateVote = this.indicateVote.bind(this);
  }

  componentDidMount() {
    this.indicateVote();
  }

  handleUpvote(e) {
    e.preventDefault();
    ReactGA.event({
      category: "Upvote Answer",
      action: "Click upvote on an answer",
    });
    this.props.createAnswerUpvote(this.state.questionId, this.state.answerId)
      .then(() => {
        this.indicateVote();
        return this.setState({
          votes: this.props.answer.upvotes - this.props.answer.downvotes,
          totalVotes: this.props.answer.upvotes + this.props.answer.downvotes
        })
      });
  }

  handleDownvote(e) {
    e.preventDefault();
    ReactGA.event({
      category: "Downvote Answer",
      action: "Click downvote on an answer",
    });
    this.props.createAnswerDownvote(this.state.questionId, this.state.answerId)
      .then(() => {
        this.indicateVote();
        return this.setState({
          votes: this.props.answer.upvotes - this.props.answer.downvotes,
          totalVotes: this.props.answer.upvotes + this.props.answer.downvotes
        })
      });
  }


  votingDisplay() {
    return (
      <div className="voting answer-voting">
        <TiArrowSortedUp
          id="up-arrow-outline-answer"
          className={`up-answer-arrow-selected-${this.props.answer.id}`}
          onClick={this.handleUpvote}
        />
        <p className="voting-score">{this.state.votes}</p>
        <TiArrowSortedDown
          id="down-arrow-outline-answer"
          className={`down-answer-arrow-selected-${this.props.answer.id}`}
          onClick={this.handleDownvote}
        />
        <p className="total-user-votes">Votes: {this.state.totalVotes}</p>
      </div>
    );
  }

  indicateVote() {
    if (this.props.currentUser) {
      let currentUserId = parseInt(this.props.currentUser.id);
      let userUpvoted = this.props.answer.upvotes_user_id.includes(currentUserId);
      let userDownvoted = this.props.answer.downvotes_user_id.includes(currentUserId);

      let upvoteArrow = document.getElementsByClassName(`up-answer-arrow-selected-${this.props.answer.id}`)[0];
      let downvoteArrow = document.getElementsByClassName(`down-answer-arrow-selected-${this.props.answer.id}`)[0];

      if (userUpvoted) {
        upvoteArrow.style.color = "orange";
        downvoteArrow.style.color = "lightgray";
      } else if (userDownvoted) {
        downvoteArrow.style.color = "orange";
        upvoteArrow.style.color = "lightgray";
      }
    }
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