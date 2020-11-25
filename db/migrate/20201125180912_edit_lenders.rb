class EditLenders < ActiveRecord::Migration[5.2]
  def change
    add_column :lenders, :loan_amount, :integer, null: false
  end
end
