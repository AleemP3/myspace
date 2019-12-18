class Addfriends < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :liked_friends, :text
  end
end
