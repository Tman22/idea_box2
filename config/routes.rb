Rails.application.routes.draw do

root 'home#index'

  namespace :api, :defaults => {format: :json } do
    namespace :v1 do
      scope :module => 'ideas' do
        resources :ideas do
        end
      end
    end
  end

end
