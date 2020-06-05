class CreateIndexForDownvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :index_for_downvotes do |t|
      add_index :downvotes, [:user_id, :question_id], unique: true
    end
  end
end
