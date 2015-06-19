class Project < ActiveRecord::Base
   validates :title, :image_link, presence: { message: "Could you please include a title and image link?" }
end
