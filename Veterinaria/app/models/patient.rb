class Patient < ActiveRecord::Base
 has_many :owner_patients
 has_many :owners, :through => :owner_patients
 has_many :doctor_patients
 has_many :doctors, :through => :doctors_patients
 has_many :vaccines
 has_many :voucher_clientes
 has_many :vouchers, :through => :voucher_clientes
 has_many :articles, :through => :voucher_clientes
end
