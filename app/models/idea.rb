class Idea < ActiveRecord::Base
  scope :ordered_list, -> { order(updated_at: :asc) }
end
