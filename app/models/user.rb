class User < ApplicationRecord
  # we can validates password length, without storing it in DB
  attr_reader :password

  # password validations
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  # user attribute validations
  # validates :email, presence: true, email_format: { message: "invalid: please enter valid email format" }
  # validates :reputation, presence: true
  # validates :bronze_points, presence: true
  # validates :silver_points, presence: true
  # validates :gold_points, presence: true
  # validates :location, presence: true

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
