@answers.each do |answer|
  json.set! answer.id do
    json.extract! answer, :id, :question_id, :answerer_id, :description
  end
end



