import React from 'react';
import SearchQuestionsItem from './search_questions_item';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import SideBarContainer from '../../sidebar/sidebar';
import AskQuestion from '../new_question/ask_question';
import Modal from 'react-modal';

class SearchQuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchSearchQuestions();
  }

  changeModalStatusForAsk(status) {
    // this.setState({ modalOpenForAsk: status });
  }

  render() {
    return null;
  }
}

export default SearchQuestionsIndex;
