Rails.application.routes.draw do
  get '/auth/:name/callback', to: 'omniauths#callback'
  get '/load', to: 'omniauths#load'
  get '/uninstall', to: 'omniauths#uninstall'

  # APIs
  namespace :api do
    post 'payment', to: 'queries#payment'
  end

  root to: 'welcome#home'
end
