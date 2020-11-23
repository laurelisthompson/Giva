class CreateLenders < ActiveRecord::Migration[5.2]
  def change
    create_table :lenders do |t|
      t.integer :user_id, null: false
      t.integer :loan_id, null: false

      t.timestamps
    end
    add_index :lenders, :user_id
    add_index :lenders, :loan_id
  end
end
