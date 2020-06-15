class AddIndexForVotes < ActiveRecord::Migration[5.2]
  def change
    add_index :upvotes, [:user_id, :question_id, :answer_id], unique: true
    add_index :downvotes, [:user_id, :question_id, :answer_id], unique: true
  end
end
