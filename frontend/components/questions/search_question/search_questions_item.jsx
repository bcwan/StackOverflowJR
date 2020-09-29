import React from "react";
import { Link } from "react-router-dom";
import { ListGroupItem } from "react-bootstrap";
import SearchQuestionStats from './search_question_stats';

// css will be the same classes as that of question item
const SearchQuestionsItem = ({ question }) => {
  return (
    <ListGroupItem className="single-question">
      <SearchQuestionStats question={question} />
      <div className="question">
        <Link to={`/questions/${question.id}`}>{question.title}</Link>
        <p className="question-desc-item">{question.description}</p>
      </div>
    </ListGroupItem>
  );
};

export default SearchQuestionsItem;