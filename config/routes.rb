Rails.application.routes.draw do
  get '/auth/:name/callback', to: 'omniauths#callback'
  get '/load', to: 'omniauths#load'
  get '/uninstall', to: 'omniauths#uninstall'
  root to: 'welcome#home'
end
