export const createUpvote = (questionId, answerId) => {
  debugger;
  return $.ajax({
    method: 'POST',
    url: `/api/questions/${questionId}/upvotes`,
    data: {
      upvote: {
        answer_id: answerId
      }
    }
  })
};

export const deleteUpvote = (questionId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/questions/${questionId}/upvotes`
  })
);