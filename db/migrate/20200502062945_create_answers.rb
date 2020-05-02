class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.integer :answerer_id, null: false
      t.integer :question_id, null: false
      t.string :description, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false 
      t.timestamps
    end
  end
end
