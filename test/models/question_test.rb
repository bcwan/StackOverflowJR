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
require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
