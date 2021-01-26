class Api::QueriesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_store

  def payment
    @store.update(is_paid: true)
  end

  private

  def set_store
    @store = Store.find(params[:store_id])
  end
end
