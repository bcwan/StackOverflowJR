# == Schema Information
#
# Table name: questions
#
#  id            :bigint           not null, primary key
#  description   :string           not null
#  has_answers   :boolean          default(FALSE), not null
#  solved        :boolean          default(FALSE), not null
#  title         :citext           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  questioner_id :integer          not null
#
# Indexes
#
#  index_questions_on_questioner_id  (questioner_id)
#
class Question < ApplicationRecord

  # title has minimum of 15 words
  # description has minimum of 30 words
  #validates :title, presence: true, length: { minimum: 15 }
  #validates :description, presence: true, length: { minimum: 30 }
  validates :title, presence: true
  validates :description, presence: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :questioner_id,
    primary_key: :id,
    optional: true

  has_many :answers,
    class_name: :Answer,
    foreign_key: :question_id,
    primary_key: :id,
    dependent: :destroy
  
  has_many :upvotes,
    class_name: :Upvote,
    foreign_key: :question_id,
    primary_key: :id,
    dependent: :destroy

  has_many :downvotes,
    class_name: :Downvote,
    foreign_key: :question_id,
    primary_key: :id,
    dependent: :destroy
  
end
