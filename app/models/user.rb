class User < ActiveRecord::Base
  has_many :comments
  # has_secure_password
  # validates :name, :password, :password_confirmation, presence: { message: "We need a name and a valid password, if you please?" }
end

