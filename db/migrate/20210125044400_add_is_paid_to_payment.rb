class AddIsPaidToPayment < ActiveRecord::Migration[6.0]
  def change
    change_table :stores do |t|
      t.boolean :is_paid
    end
  end
end
