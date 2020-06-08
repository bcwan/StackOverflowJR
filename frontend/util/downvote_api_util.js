export const createDownvote = (questionId) => {
  debugger;
  return $.ajax({
    method: 'POST',
    url: `/api/questions/${questionId}/downvotes`
  })
};

export const deleteDownvote = (questionId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/questions/${questionId}/downvotes`
  })
);