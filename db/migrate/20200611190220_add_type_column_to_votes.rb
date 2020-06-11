class AddTypeColumnToVotes < ActiveRecord::Migration[5.2]
  def change
    add_column :upvotes, :answer_id, :integer
    add_column :downvotes, :answer_id, :integer
  end
end
