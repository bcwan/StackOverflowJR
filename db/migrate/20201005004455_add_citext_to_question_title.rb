class AddCitextToQuestionTitle < ActiveRecord::Migration[5.2]
  def change
    change_column :questions, :title, :citext
  end
end
