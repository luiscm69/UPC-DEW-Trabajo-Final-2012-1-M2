class CreateBook1s < ActiveRecord::Migration
  def change
    create_table :book1s do |t|
      t.string :title

      t.timestamps
    end
  end
end
