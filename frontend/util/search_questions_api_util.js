// search REST API
export const fetchSearchQuestions = (keywords) => (
  $.ajax({
    method: 'GET',
    url: '/api/questions/search',
    data: { keywords }
  })
);

// export const fetchSearchQuestions = () => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/questions/search'
//   })
// );