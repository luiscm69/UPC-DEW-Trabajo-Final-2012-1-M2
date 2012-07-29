class ChangeOwnerType < ActiveRecord::Migration
  def up
  change_column :vaccines, :owner, :integer
  end

  def down
  change_column :vaccines, :owner, :string
  end
end
