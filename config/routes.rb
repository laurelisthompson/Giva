Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defualts: { format: :json } do
    resources :user, only: [:create]
    resources :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end