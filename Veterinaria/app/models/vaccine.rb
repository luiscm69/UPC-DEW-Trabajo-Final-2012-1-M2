class Vaccine < ActiveRecord::Base
 belongs_to :owner
 belongs_to :patient
end