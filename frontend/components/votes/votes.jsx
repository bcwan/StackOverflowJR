import React from 'react';
import { 
  TiArrowDownOutline,
  TiArrowDownThick,
  TiArrowUpOutline,
  TiArrowUpThick
} from 'react-icons/ti'


class Votes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: this.props.question.id,
      votes: this.props.question.upvotes - this.props.question.downvotes
    }
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleUpvote(e) {
    e.preventDefault();
    // if there's a downvote, delete it
    //this.props.deleteDownvote(this.state.questionId);
    // then upvote it
    debugger;
    this.props.createUpvote(this.state.questionId)
      .then(() => {
        debugger;
        return this.setState({
          votes: this.props.question.upvotes - this.props.question.downvotes
        })
      });
    debugger;
  }

  handleDownvote(e) {
    e.preventDefault();
    // if there's a upvote, delete it
    //this.props.deleteUpvote(this.state.questionId);
    // then downvote it
    debugger;
    this.props.createDownvote(this.state.questionId)
      .then(() => {
        debugger;
        return this.setState({
          votes: this.props.question.upvotes - this.props.question.downvotes
        })
      });
    debugger;
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
      </div>
    );
  }


  render() {
    debugger;
    return (
      <div>
        {this.votingDisplay()}
      </div>
    );
  }
}

export default Votes;