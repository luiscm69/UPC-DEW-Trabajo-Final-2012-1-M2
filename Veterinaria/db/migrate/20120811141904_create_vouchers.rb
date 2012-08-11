class CreateVouchers < ActiveRecord::Migration
  def change
    create_table :vouchers do |t|
      t.string :ruc
      t.string :direccion
      t.date :fecha
      t.text :detalle
      t.decimal :precio
      t.integer :cantidad

      t.timestamps
    end
  end
end
