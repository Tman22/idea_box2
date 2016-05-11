require 'rails_helper'

RSpec.feature 'user creates an idea', type: :feature do
  include WaitForAjax
  it 'creates and item', js: true do

    visit '/'
    fill_in 'Title', with: 'Cool'
    fill_in 'Body', with: 'Something that can chill my beer'
    click_on 'Create'

    idea = Idea.all.first
    expect(page).to have_content('Cool')
    expect(idea.title).to eq 'Cool'

  end
end
