@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id, :title, :questioner_id, :description, :solved, :has_answers
    json.upvotes question.upvotes.where(answer_id: 0).count
    json.downvotes question.downvotes.where(answer_id: 0).count
    json.answer_count question.answers.count
    json.upvotes_user_id question.upvotes.where(answer_id: 0).pluck(:user_id)
    json.downvotes_user_id question.downvotes.where(answer_id: 0).pluck(:user_id)
  end
end