class AddUserToJots < ActiveRecord::Migration[6.0]
  def change
    add_reference :jots, :user, null: false, foreign_key: true
  end
end
