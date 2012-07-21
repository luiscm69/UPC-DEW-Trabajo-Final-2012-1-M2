class RemoveStatusFromProspects < ActiveRecord::Migration
  def up
    remove_column :prospects, :status
      end

  def down
    add_column :prospects, :status, :boolean
  end
end
