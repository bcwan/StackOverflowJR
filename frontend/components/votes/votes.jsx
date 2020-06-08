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
      downvotes: this.props.question.downvotes,
      votes: this.props.question.upvotes - this.props.question.downvotes
    }
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleUpvote(e) {
    e.preventDefault();
    this.props.createUpvote(this.state.questionId)
      .then(() => {
        return this.setState({
          upvotes: this.props.upvotes,
          votes: this.props.question.upvotes - this.props.question.downvotes
        })
      });
  }

  handleDownvote(e) {
    e.preventDefault();
    this.props.deleteUpvote(this.state.questionId)
      .then(() => {
        return this.setState({
          upvotes: this.props.upvotes,
          votes: this.props.question.upvotes - this.props.question.downvotes
        })
      });
  }


  render() {
    return (
      <div>
        <TiArrowUpOutline 
          className="up-arrow-outline"
          onClick = {this.handleUpvote}  
        />
        <p className="voting-score">{this.state.votes}</p>
        <TiArrowDownOutline 
          className="down-arrow-outline"
          onClick = {this.handleDownvote}
        />
      </div>
    );
  }
}

export default Votes;