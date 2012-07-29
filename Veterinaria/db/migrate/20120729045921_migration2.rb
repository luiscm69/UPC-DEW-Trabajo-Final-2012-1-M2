class Migration2 < ActiveRecord::Migration
  def up
  change_column :vaccines, :owner, :string
  change_column :vaccines, :patient, :string
  end

  def down
  change_column :vaccines, :owner, :integer
  change_column :vaccines, :patient, :integer
  end
end
