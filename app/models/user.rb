# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  # we can validates password length, without storing it in DB
  attr_reader :password

  # password validations
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true


  has_many :questions,
    class_name: :Question,
    foreign_key: :questioner_id,
    primary_key: :id,
    dependent: :destroy

  has_many :answers,
    class_name: :Answer,
    foreign_key: :answerer_id,
    primary_key: :id,
    dependent: :destroy

  has_many :upvotes,
    class_name: :Upvote,
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy

  has_many :downvotes,
    class_name: :Downvote,
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy

  # able to run method before running validations
  # just needs to have session_token when a user is created
  after_initialize :ensure_session_token

  # record associations

  # class method for finding user with correct password and username
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    # instance variable so we can validate length
    @password = password
    # create password_digest so that we don't have to store password in DB
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    # when a user logs out, we want to reset their session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

end
