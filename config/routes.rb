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

    # show list of questions
    resources :questions, only: [:index]

    # show list of answers from a particular question
    resources :questions, only: [:show] do
      resources :answers, only: [:index]
    end

    resources :questions, only: [:self] do
      collection do
        get 'self'
      end
    end
    
    # create, update, destroy questions
    resources :questions, only: [:update, :destroy, :create]
    
    # editing an answer
    resources :answers, only: [:show, :destroy, :create, :update]
  end
end

# shows list index of current users questions
# resources :users do
#   member do
#     get 'questions'
#   end
# end
# 
# or===
#
