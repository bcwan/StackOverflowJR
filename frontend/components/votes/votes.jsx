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
  }

  render() {
    const { createUpvote, deleteUpvote, createDownvote, deleteDownvote } = this.props;

    return (
      <div>
        <TiArrowUpOutline className="up-arrow-outline"/>
        <p className="voting-score">{this.state.upvotes}</p>
        <TiArrowDownOutline className="down-arrow-outline"/>
      </div>
    );
  }
}

export default Votes;