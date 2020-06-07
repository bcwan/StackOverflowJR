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
  }

  render() {
    const { upvotes, 
            downvotes, 
            createUpvote, 
            deleteUpvote, 
            createDownvote, 
            deleteDownvote
    } = this.props;

    return (
      <div>
        <TiArrowUpOutline className="up-arrow-outline"/>
        <p className="voting-score">100</p>
        <TiArrowDownOutline className="down-arrow-outline"/>
      </div>
    );
  }
}

export default Votes;