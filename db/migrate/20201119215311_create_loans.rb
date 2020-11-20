class CreateLoans < ActiveRecord::Migration[5.2]
  def change
    create_table :loans do |t|
      t.string :loan_name, null: false
      t.string :location, null: false
      t.string :type_category, null: false
      t.string :loan_description, null: false
      t.integer :total_amount, null: false
      t.integer :loan_length, null: false
      t.date :deadline, null: false

      t.timestamps
    end
    add_index :loans, :location
    add_index :loans, :type_category
  end
end
