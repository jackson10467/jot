class Category < ApplicationRecord
  belongs_to :user 
  has_many :jots, dependent: :destroy
end
