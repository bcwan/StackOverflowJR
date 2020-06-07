import React from 'react';

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
    return null;

  }
}

export default Votes;