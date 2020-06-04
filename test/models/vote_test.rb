# == Schema Information
#
# Table name: votes
#
#  id          :bigint           not null, primary key
#  vote_type   :integer          default(0), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  question_id :integer          not null
#  user_id     :integer          not null
#
require 'test_helper'

class VoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
