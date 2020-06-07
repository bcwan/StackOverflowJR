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
        <TiArrowUpOutline />
        <p>888</p>
        <TiArrowDownOutline />
      </div>
    );
  }
}

export default Votes;