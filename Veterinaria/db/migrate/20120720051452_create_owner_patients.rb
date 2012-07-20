class CreateOwnerPatients < ActiveRecord::Migration
  def change
    create_table :owner_patients do |t|
      t.integer :owner_id
      t.integer :patient_id
      t.text :note

      t.timestamps
    end
  end
end
