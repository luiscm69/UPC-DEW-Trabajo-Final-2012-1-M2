class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.string :name
      t.string :species
      t.string :race
      t.string :blood
      t.string :sterilized
      t.string :size
      t.string :activity
      t.string :weight
      t.string :bith

      t.timestamps
    end
  end
end
