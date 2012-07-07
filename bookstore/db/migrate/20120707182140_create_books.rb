class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :tittle

      t.timestamps
    end
  end
end
