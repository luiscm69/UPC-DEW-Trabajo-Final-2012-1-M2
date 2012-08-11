class OwnerNote < ActiveRecord::Base
	belongs_to :owner
	belongs_to :note
end
