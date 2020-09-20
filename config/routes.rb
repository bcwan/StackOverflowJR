Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    # current user
    resources :questions, only: [:self] do
      collection do
        get :self
      end
    end

    # search
    resources :questions, only: [:search] do
      collection do
        get :search
      end
    end


    # show list of questions
    resources :questions, only: [:index]

    # show list of answers from a particular question
    resources :questions, only: [:show] do
      resource :downvotes, only: [:create, :destroy]
      resource :upvotes, only: [:create, :destroy]
      resources :answers, only: [:index, :create]
    end

    
    # create, update, destroy questions
    resources :questions, only: [:update, :destroy, :create]
    
    # editing an answer
    resources :answers, only: [:show, :destroy, :update]

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
