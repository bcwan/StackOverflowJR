export const createUpvote = (questionId) => {
  debugger;
  return $.ajax({
    method: 'POST',
    url: `/api/questions/${questionId}/upvotes`
  })
};

export const deleteUpvote = (questionId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/questions/${questionId}/upvotes`
  })
);