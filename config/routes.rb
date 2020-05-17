Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users do
    resources :categorys do
      resources :jots
    end
  end
  delete '/users/:userid/categorys/:categoryid/jots', to: 'jots#destroyAll'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
