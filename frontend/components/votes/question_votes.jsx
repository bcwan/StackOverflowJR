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
    this.indicateVote = this.indicateVote.bind(this);
  }


  componentDidMount() {
    this.indicateVote();
  }

  handleUpvote(e) {
    e.preventDefault();
    this.props.createUpvote(this.state.questionId, 0)
      .then(() => {
        this.indicateVote();
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
        this.indicateVote();
        return this.setState({
          votes: this.props.question.upvotes - this.props.question.downvotes,
          totalVotes: this.props.question.upvotes + this.props.question.downvotes
        })
      });
  }

  votingDisplay() {
    return (
      <div className="voting">
        <TiArrowSortedUp
          id="up-arrow-outline"
          onClick={this.handleUpvote}
        />
        <p className="voting-score">{this.state.votes}</p>
        <TiArrowSortedDown
          id="down-arrow-outline"
          onClick={this.handleDownvote}
        />
        <p className="total-user-votes">Votes: {this.state.totalVotes}</p>
      </div>
    );
  }

  indicateVote() {
    if (this.props.currentUser) {
      let currentUserId = parseInt(this.props.currentUser.id);
      let userUpvoted = this.props.question.upvotes_user_id.includes(currentUserId);
      let userDownvoted = this.props.question.downvotes_user_id.includes(currentUserId);

      let upvoteArrow = document.getElementById("up-arrow-outline");
      let downvoteArrow = document.getElementById("down-arrow-outline");

      if (userUpvoted) {
        upvoteArrow.style.color = "orange";
        downvoteArrow.style.color = "lightgray";
      } else if (userDownvoted) {
        downvoteArrow.style.color = "orange";
        upvoteArrow.style.color="lightgray";
      }
    }
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