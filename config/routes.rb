Rails.application.routes.draw do
  resources :comments
  resources :users
  resources :projects
  root 'application#index'
end
