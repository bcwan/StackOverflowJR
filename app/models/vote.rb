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
class Vote < ApplicationRecord

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
    

end
