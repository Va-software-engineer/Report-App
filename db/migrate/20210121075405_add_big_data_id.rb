class AddBigDataId < ActiveRecord::Migration[6.0]
  def change
    change_table :stores do |t|
      t.string :project_id
      t.string :data_set_id
    end
  end
end
