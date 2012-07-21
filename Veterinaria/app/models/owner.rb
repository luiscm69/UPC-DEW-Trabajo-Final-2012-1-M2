class Owner < ActiveRecord::Base
 has_many :owner_patients
 has_many :patients, :through => :owner_patients
 has_many :vaccines
end
