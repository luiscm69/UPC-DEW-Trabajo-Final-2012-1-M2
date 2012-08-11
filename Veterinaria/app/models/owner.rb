class Owner < ActiveRecord::Base
 has_many :owner_patients
 has_many :patients, :through => :owner_patients
 has_many :vaccines
 has_many :owner_notes
 has_many :notes, :through => :owner_notes
end
