class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :productname
      t.decimal :price
      t.integer :stock

      t.timestamps
    end
  end
end
