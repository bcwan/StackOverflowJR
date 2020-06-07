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
      upvotes: this.props.question.upvotes,
      downvotes: this.props.question.downvotes
    }
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleUpvote(e) {
    e.preventDefault();
    debugger;
    this.props.createUpvote(this.state.questionId);
    // the updated response, take the updated upvotes
    debugger;
    this.setState({
      upvotes: this.props.upvotes
    });
    debugger;
  }

  handleDownvote(e) {
    e.preventDefault();
    debugger;
    this.props.deleteUpvote(this.state.questionId);
    debugger;
    this.setState({
      upvotes: this.props.upvotes
    });
    debugger;
    // the updated response, take the updated upvotes after deletion
  }


  render() {
    const { createUpvote, deleteUpvote, createDownvote, deleteDownvote } = this.props;
    debugger;
    return (
      <div>
        <TiArrowUpOutline 
          className="up-arrow-outline"
          onClick = {this.handleUpvote}  
        />
        <p className="voting-score">{this.state.upvotes}</p>
        <TiArrowDownOutline 
          className="down-arrow-outline"
          onClick = {this.handleDownvote}
        />
      </div>
    );
  }
}

export default Votes;