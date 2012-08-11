class CreateClientVouchers < ActiveRecord::Migration
  def change
    create_table :client_vouchers do |t|
      t.integer :patient_id
      t.integer :voucher_id
      t.integer :article_id
      t.integer :cantidad
      t.decimal :precio

      t.timestamps
    end
  end
end
