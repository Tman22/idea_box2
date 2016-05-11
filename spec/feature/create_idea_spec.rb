require 'rails_helper'

RSpec.feature 'creates and view items', type: :feature do
  include WaitForAjax
  fixtures :ideas

  it 'createIdea and postIdea', js: true do

    visit '/'
    fill_in 'Title', with: 'Sweeet'
    fill_in 'Body', with: 'Something that can chill my beer'
    click_on 'Create'

    idea = Idea.last
    expect(page).to have_content('Sweeet')
    expect(idea.title).to eq 'Sweeet'

  end

  it 'renderIdeas and fetchIdeas', js: true do
    idea = ideas(:one)

    visit '/'

    expect(page).to have_content('Bruce Wayne')
    expect(page).to have_content('Clark Kent')
  end
end
