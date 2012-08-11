class DropVoucherClients < ActiveRecord::Migration
  def up
	drop_table :voucher_clients
  end

  def down
  end
end
