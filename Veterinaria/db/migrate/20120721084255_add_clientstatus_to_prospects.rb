class AddClientstatusToProspects < ActiveRecord::Migration
  def change
    add_column :prospects, :clientstatus, :boolean

  end
end
