class Removephonefromvaccines < ActiveRecord::Migration
  def up
  remove_column :vaccines, :phone
  end

  def down
  add_column :vaccines, :phone, :string
  end
end
