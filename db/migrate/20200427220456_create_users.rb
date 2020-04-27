class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.string :email, null: false, unique: true
      t.integer :reputation, null: false, :default => 0
      t.integer :bronze_points, null: false, :default => 0
      t.integer :silver_points, null: false, :default => 0
      t.integer :gold_points, null: false, :default => 0
      t.string :location, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false 
      t.timestamps
    end
  end
end
