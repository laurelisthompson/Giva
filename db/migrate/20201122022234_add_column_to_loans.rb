class AddColumnToLoans < ActiveRecord::Migration[5.2]
  def change
    add_column :loans, :loan_photo, :string, null:false, default:""
  end
end
