class AddTypeColumnToVotes < ActiveRecord::Migration[5.2]
  def change
    add_column :upvotes, :type, :integer, null: false
    add_column :downvotes, :type, :integer, null: false
  end
end
