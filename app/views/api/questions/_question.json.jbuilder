json.extract! question, :id, :title, :questioner_id, :description, :solved, :has_answers
json.upvotes question.upvotes.where(answer_id: 0).count
json.downvotes question.downvotes.where(answer_id: 0).count