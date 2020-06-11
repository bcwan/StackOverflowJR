class AddTypeColumnToVotes < ActiveRecord::Migration[5.2]
  def change
    add_column :upvotes, :answer_id, :integer, :default => 0
    add_column :downvotes, :answer_id, :integer, :default => 0
  end
end
