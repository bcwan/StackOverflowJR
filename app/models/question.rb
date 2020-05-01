# == Schema Information
#
# Table name: questions
#
#  id            :bigint           not null, primary key
#  description   :string           not null
#  has_answers   :boolean          default(FALSE), not null
#  solved        :boolean          default(FALSE), not null
#  title         :string           not null
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
  validates :title, presence: true, length: { minimum: 15 }
  validates :description, presence: true, length: { minimum: 30 }

  belongs_to :user,
    class_name: :User,
    foreign_key: :questioner_id,
    primary_key: :id


end
