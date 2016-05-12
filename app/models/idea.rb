class Idea < ActiveRecord::Base
  validates_presence_of :title
  validates_presence_of :body
  scope :ordered_list, -> { order(updated_at: :asc) }
end
