class CreateVoucherClients < ActiveRecord::Migration
  def change
    create_table :voucher_clients do |t|
      t.integer :owner_id
      t.integer :patient_id
      t.string :ruc
      t.string :direccion
      t.date :fecharegistro
      t.text :detalle
      t.decimal :precio
      t.integer :cantidad

      t.timestamps
    end
  end
end
