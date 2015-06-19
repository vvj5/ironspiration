class User < ActiveRecord::Base
  has_many: comments
  has_secure_password
  validates :name, presence: { message: "Please kindly enter a name for us?" }
end
