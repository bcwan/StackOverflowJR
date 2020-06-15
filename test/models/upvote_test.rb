# == Schema Information
#
# Table name: upvotes
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  answer_id   :integer          default(0)
#  question_id :integer          not null
#  user_id     :integer          not null
#
require 'test_helper'

class UpvoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
