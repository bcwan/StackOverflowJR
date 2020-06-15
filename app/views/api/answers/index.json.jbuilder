@answers.each do |answer|
  json.set! answer.id do
    json.extract! answer, :id, :question_id, :answerer_id, :description
    json.upvotes answer.upvotes.count
    json.downvotes answer.downvotes.count
  end
end



