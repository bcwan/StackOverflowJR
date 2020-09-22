// search REST API
export const fetchSearchQuestions = () => (
  $.ajax({
    method: 'GET',
    url: '/api/questions/search'
  })
);