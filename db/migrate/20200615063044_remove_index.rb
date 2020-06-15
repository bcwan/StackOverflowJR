class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :downvotes, name: "index_downvotes_on_user_id_and_question_id"
    remove_index :upvotes, name: "index_upvotes_on_user_id_and_question_id"
  end
end
