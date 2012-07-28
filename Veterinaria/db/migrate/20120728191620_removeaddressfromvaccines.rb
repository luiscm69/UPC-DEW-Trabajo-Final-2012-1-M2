class Removeaddressfromvaccines < ActiveRecord::Migration
  def up
  remove_column :vaccines, :address
  end

  def down
  add_column :vaccines, :address, :string
  end
end
