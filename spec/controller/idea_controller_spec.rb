# require 'rails_helper'
#
# RSpec.describe Api::V1::CustomersController, type: :controller do
#   fixtures :customers
#
#   describe "#index" do
#    it "responds with all customers" do
#      get :index, format: :json
#      customers = JSON.parse(response.body)
#
#      expect(response).to be_success
#      expect(customers.first['first_name']).to eq 'Taylor'
#      expect(customers.first['last_name']).to eq 'Moore'
#      expect(customers.last['first_name']).to eq 'Bruce'
#     end
#   end
# end
