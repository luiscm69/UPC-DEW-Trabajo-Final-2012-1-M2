class Note < ActiveRecord::Base
	has_many :owner_notes
	has_many :owners, :through => :owner_notes
end
