class CreateOwnerNotes < ActiveRecord::Migration
  def change
    create_table :owner_notes do |t|
      t.integer :owner_id
      t.integer :note_id

      t.timestamps
    end
  end
end
