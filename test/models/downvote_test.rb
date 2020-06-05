# == Schema Information
#
# Table name: downvotes
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  question_id :integer          not null
#  user_id     :integer          not null
#
require 'test_helper'

class DownvoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
