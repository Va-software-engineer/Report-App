class Api::QueriesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_store

  def store_details
    render json: {store: @store}
    @store
  end

  def update_store_property_id
    @store.update(project_id: params[:project_id])
    render json: {status: true}
  end

  def update_store_data_set_id
    @store.update(data_set_id: params[:data_set_id])
    render json: {status: true}
  end

  def payment
    @store.update(is_paid: true)
  end

  private

  def set_store
    @store = Store.find(params[:store_id])
  end
end
