class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :manager_id
      t.string :manager_name
      t.string :title
      t.string :department
      t.string :cell_phone
      t.string :office_phone
      t.string :email
      t.string :city
      t.string :pic
      t.string :twitter_id
      t.string :blog
      t.timestamps null: false
    end
  end
end
