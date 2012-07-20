class CreateVaccines < ActiveRecord::Migration
  def change
    create_table :vaccines do |t|
      t.string :name
      t.string :patient
      t.string :owner
      t.string :phone
      t.string :address
      t.date :date

      t.timestamps
    end
  end
end
