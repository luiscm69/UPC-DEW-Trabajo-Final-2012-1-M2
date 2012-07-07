class AddDescripcionToBooks < ActiveRecord::Migration
  def change
    add_column :books, :descripcion, :text

  end
end
