class ChangePatientType < ActiveRecord::Migration
  def up
  change_column :vaccines, :patient, :integer
  end

  def down
  change_column :vaccines, :patient, :string
  end
end
