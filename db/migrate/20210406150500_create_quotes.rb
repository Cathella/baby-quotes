class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.text :content
      t.string :author_name

      t.timestamps
    end
  end
end
