class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.integer :type
      t.string :title
      t.string :body
      t.string :location
      t.string :image_link
      t.string :project_url
      t.integer :year
      t.integer :likes

      t.timestamps null: false
    end
  end
end
