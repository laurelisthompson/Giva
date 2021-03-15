Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :loans, only: [:index, :show]
    resources :users, only: [:create, :show]
    resources :lenders, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end