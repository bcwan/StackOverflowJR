# == Schema Information
#
# Table name: downvotes
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  answer_id   :integer
#  question_id :integer          not null
#  user_id     :integer          not null
#
# Indexes
#
#  index_downvotes_on_user_id_and_question_id  (user_id,question_id) UNIQUE
#
class Downvote < ApplicationRecord
  
  validates_uniqueness_of :question_id, :scope => :user_id

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id,
    optional: true

  belongs_to :question,
    class_name: :Question,
    foreign_key: :question_id,
    primary_key: :id,
    optional: true

  belongs_to :answer,
    class_name: :Answer,
    foreign_key: :answer_id,
    primary_key: :id,
    optional: true
end
