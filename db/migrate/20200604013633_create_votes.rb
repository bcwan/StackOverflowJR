class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :question_id, null: false
      t.integer :user_id, null: false
      t.integer :vote_type, null: false, :default => 0
      t.timestamps
    end
  end
end
