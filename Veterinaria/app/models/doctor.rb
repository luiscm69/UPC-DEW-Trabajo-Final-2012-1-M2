class Doctor < ActiveRecord::Base
	has_many :doctor_patients
	has_many :doctors
end
