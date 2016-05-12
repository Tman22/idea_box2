require 'rails_helper'

RSpec.describe Api::V1::Ideas::IdeasController, type: :controller do
  fixtures :ideas

  describe "#index" do
    it "responds with all customers" do
      get :index, format: :json
      ideas = JSON.parse(response.body)

      expect(response).to be_success
      expect(ideas.first['title']).to eq 'Bruce Wayne'
      expect(ideas.last['title']).to eq 'Clark Kent'
    end
  end
end
