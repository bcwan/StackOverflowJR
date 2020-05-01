class CreateQuestionsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :questions_tables do |t|
      t.string :title, null: false
      t.integer :questioner_id, null: false
      t.string :description, null: false
      t.boolean :solved, null: false, :default => false
      t.boolean :has_answers, null: false, :default => false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false 
    end
  end
end
