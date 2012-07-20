class CreateOwners < ActiveRecord::Migration
  def change
    create_table :owners do |t|
      t.string :name
      t.string :email
      t.string :address
      t.string :phone
      t.string :cellphone

      t.timestamps
    end
  end
end
