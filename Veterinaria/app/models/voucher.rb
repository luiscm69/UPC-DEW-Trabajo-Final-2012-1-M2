class Voucher < ActiveRecord::Base
 has_many :voucher_clientes
 has_many :patients, :through => :voucher_clientes
 has_many :articles, :through => :voucher_clientes
end
