Rails.application.routes.draw do
  get '/auth/:name/callback', to: 'omniauths#callback'
  get '/load', to: 'omniauths#load'
  get '/uninstall', to: 'omniauths#uninstall'

  # APIs
  namespace :api do
    post 'payment', to: 'queries#payment'
    get 'store_details', to: 'queries#store_details'
    post 'update_store_data_set_id', to: 'queries#update_store_data_set_id'
    post 'update_store_property_id', to: 'queries#update_store_property_id'
  end

  root to: 'welcome#home'
end
