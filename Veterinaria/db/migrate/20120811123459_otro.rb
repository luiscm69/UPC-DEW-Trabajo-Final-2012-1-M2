class Otro < ActiveRecord::Migration
  def up
  change_column :notes, :description, :string
  end

  def down
  change_column :notes, :description, :text
  end
end
