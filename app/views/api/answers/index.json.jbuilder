@answers.each do |answer|
  json.set! answer.id do
    json.extract! answer, :id, :question_id, :answerer_id, :description
    json.upvotes answer.upvotes.count
    json.downvotes answer.downvotes.count
    json.upvotes_user_id answer.upvotes.pluck(:user_id)
    json.downvotes_user_id answer.downvotes.pluck(:user_id)
  end
end



