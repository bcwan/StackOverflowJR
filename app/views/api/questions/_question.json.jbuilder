json.extract! question, :id, :title, :questioner_id, :description, :solved, :has_answers
json.upvotes question.upvotes.count
json.downvotes question.downvotes.count