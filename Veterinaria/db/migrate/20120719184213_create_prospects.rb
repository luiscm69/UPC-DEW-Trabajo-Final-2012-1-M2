class CreateProspects < ActiveRecord::Migration
  def change
    create_table :prospects do |t|
      t.string :name
      t.string :email
      t.string :address
      t.binary :image
      t.string :phone
      t.string :cellphone

      t.timestamps
    end
  end
end
