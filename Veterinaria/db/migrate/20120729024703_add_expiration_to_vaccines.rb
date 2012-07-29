class AddExpirationToVaccines < ActiveRecord::Migration
  def change
    add_column :vaccines, :expiration, :date

  end
end
