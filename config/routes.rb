Rails.application.routes.draw do

  namespace :v1 do
    resources :employee, only: [:index]
  end

  root 'angular#index'
end
