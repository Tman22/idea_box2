require 'rails_helper'

RSpec.describe Api::V1::Ideas::IdeasController, type: :controller do
  fixtures :ideas

  describe "#index" do
    it "responds with all ideas" do
      get :index, format: :json
      ideas = JSON.parse(response.body)

      expect(response).to be_success
      expect(ideas.first['title']).to eq 'Bruce Wayne'
      expect(ideas.last['title']).to eq 'Clark Kent'
    end
  end

  describe "#show" do
    it "responds with one idea" do
      idea = ideas(:one)
      get :show, id: idea.id, format: :json
      idea = JSON.parse(response.body)

      expect(response).to be_success
      expect(idea['title']).to eq 'Bruce Wayne'
    end
  end

  describe "#create" do
    it "responds with created idea" do
      idea = {title: 'woot', body: 'cool owl'}
      get :create, postParams: idea, format: :json
      idea = JSON.parse(response.body)

      expect(response).to be_success
      expect(idea['title']).to eq 'woot'
      expect(Idea.all.count).to eq 3
    end
  end

  describe "#update" do
    it "responds with updated id" do
      idea = {title: 'title'}
      get :update, id: 1, postParams: idea, format: :json

      expect(Idea.first.title).to eq 'title'
    end
  end

  describe "#destroy" do
    it "responds with destroyed idea" do
      get :destroy, id: 1, format: :json
      idea = JSON.parse(response.body)

      expect(response).to be_success
      expect(idea['title']).to eq 'Bruce Wayne'
      expect(Idea.all.count).to eq 1
    end
  end
end
