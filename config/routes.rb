Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  # user#create - signup
  # session#create - login
  # session#destroy - logout

  namespace :api, defaults: { format: :json } do
    # resources :users, only: [:create] do
    #   resources :questions, only: [:index]
    # end
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:show, :index, :update, :destroy, :create]
  end
end
