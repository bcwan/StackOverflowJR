class AddIndexToUpvotes < ActiveRecord::Migration[5.2]
  def change
    add_index :upvotes, [:user_id, :question_id], unique: true
  end
end
