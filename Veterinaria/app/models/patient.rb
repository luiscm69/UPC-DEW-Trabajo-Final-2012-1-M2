class Patient < ActiveRecord::Base
 has_many :owner_patients
 has_many :owners, :through => :owner_patients
end
