# == Schema Information
#
# Table name: answers
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  answerer_id :integer          not null
#  question_id :integer          not null
#
# Indexes
#
#  index_answers_on_answerer_id  (answerer_id)
#  index_answers_on_question_id  (question_id)
#
class Answer < ApplicationRecord
  # validates :description, presence: true, length: { minimum: 30 }
  validates :description, presence: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :answerer_id,
    primary_key: :id,
    optional: true

  belongs_to :question,
    class_name: :Question,
    foreign_key: :question_id,
    primary_key: :id,
    optional: true

  has_many :downvotes,
    class_name: :Downvote,
    foreign_key: :answer_id,
    primary_key: :id,
    dependent: :destroy

end
