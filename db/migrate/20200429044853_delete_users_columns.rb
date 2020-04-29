class DeleteUsersColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :email
    remove_column :users, :reputation
    remove_column :users, :bronze_points
    remove_column :users, :silver_points
    remove_column :users, :gold_points
    remove_column :users, :location
  end
end
