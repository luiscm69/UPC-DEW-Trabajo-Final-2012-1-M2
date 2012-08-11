class Article < ActiveRecord::Base
 has_many :voucher_clientes
 has_many :vouchers, :through => :voucher_clientes
 has_many :patients, :through => :voucher_clientes
end
