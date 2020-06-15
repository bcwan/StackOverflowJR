class RemoveIndexForDownvotesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :index_for_downvotes
  end
end
