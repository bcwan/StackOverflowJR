export const createDownvote = (questionId, answerId) => {
  debugger;
  return $.ajax({
    method: 'POST',
    url: `/api/questions/${questionId}/downvotes`,
    data: { 
      downvote: {
        answer_id: answerId
      }
    }
  })
};

export const deleteDownvote = (questionId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/questions/${questionId}/downvotes`
  })
);