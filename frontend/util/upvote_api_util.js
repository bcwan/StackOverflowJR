export const createUpvote = (questionId, answerId = 0) => {
  return $.ajax({
    method: 'POST',
    url: `/api/questions/${questionId}/upvotes`,
    data: {
      upvote: answerId
    }
  })
};

export const deleteUpvote = (questionId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/questions/${questionId}/upvotes`
  })
);