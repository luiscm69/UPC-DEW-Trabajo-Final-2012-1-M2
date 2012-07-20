class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :authentication
      t.string :name
      t.string :lastname
      t.string :email
      t.string :phone
      t.string :user
      t.string :password

      t.timestamps
    end
  end
end
