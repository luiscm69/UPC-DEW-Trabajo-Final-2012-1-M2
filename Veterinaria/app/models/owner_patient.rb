class OwnerPatient < ActiveRecord::Base
 belongs_to :owner
 belongs_to :patient
end
