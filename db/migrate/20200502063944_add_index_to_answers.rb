class AddIndexToAnswers < ActiveRecord::Migration[5.2]
  def change
    add_index :answers, :answerer_id
    add_index :answers, :question_id
  end
end
