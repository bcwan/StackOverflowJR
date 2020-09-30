// search REST API
export const fetchSearchQuestions = (keywords) => {
  return $.ajax({
    method: 'GET',
    url: '/api/questions/search',
    data: { words: keywords }
  })
};

// export const fetchSearchQuestions = () => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/questions/search'
//   })
// );