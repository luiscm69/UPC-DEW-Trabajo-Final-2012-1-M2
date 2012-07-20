class Vaccine < ActiveRecord::Base
belong_to :owner
belong_to :patient
end
