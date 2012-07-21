class AddStatusToProspects < ActiveRecord::Migration
  def change
    add_column :prospects, :status, :boolean

  end
end
