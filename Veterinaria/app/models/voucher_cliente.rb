class VoucherCliente < ActiveRecord::Base
	belongs_to :patients
	belongs_to :vouchers
	belongs_to :articles
end
