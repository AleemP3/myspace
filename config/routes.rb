Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do 
    resources :users, only: [:index, :update, :destroy] do 
      resources :posts 
    end 
    get "my_friends", to: "users#my_friends" 
    put "my_friends/:id", to: "users#my_friends_remove" 
  end
end
