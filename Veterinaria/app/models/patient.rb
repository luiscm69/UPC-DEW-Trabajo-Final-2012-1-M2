class Patient < ActiveRecord::Base
 has_many :owner_patients
 has_many :owners, :through => :owner_patients
 has_many :doctor_patients
 has_many :doctors, :through => :doctors_patients
end
