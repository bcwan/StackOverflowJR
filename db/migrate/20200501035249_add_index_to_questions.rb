class AddIndexToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_index :questions, :questioner_id 
  end
end
