class CreateJots < ActiveRecord::Migration[6.0]
  def change
    create_table :jots do |t|
      t.string :title
      t.text :note
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
