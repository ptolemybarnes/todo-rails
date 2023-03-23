Rails.application.routes.draw do
  root to: 'site#index'

  resources :todos, only: [:index, :create]
end
