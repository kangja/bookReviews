class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.text :image
      t.string :title
      t.string :author
      t.string :genre
      t.text :summary
      t.string :page_number
      t.string :price

      t.timestamps
    end
  end
end
