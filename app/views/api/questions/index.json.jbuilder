@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id, :title, :questioner_id, :description, :solved, :has_answers
  end
end