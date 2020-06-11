export const createDownvote = (questionId, answerId = 0) => {
  return $.ajax({
    method: 'POST',
    url: `/api/questions/${questionId}/downvotes`,
    data: { 
      downvote: answerId 
    }
  })
};

export const deleteDownvote = (questionId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/questions/${questionId}/downvotes`
  })
);