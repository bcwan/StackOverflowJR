Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  # user#create - signup
  # session#create - login
  # session#destroy - logout

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create] do
      resources :questions, only: [:update, :destroy, :create, :index]
    end
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:show, :index]
  end
end
