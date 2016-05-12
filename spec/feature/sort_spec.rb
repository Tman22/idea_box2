RSpec.feature 'Sort', type: :feature do
  include WaitForAjax
  fixtures :ideas

  it 'sortIdeas', js: true do
    idea = ideas(:one)

    visit '/'
    wait_for_ajax

  within('.ideas') do
    within first('h1') do
      expect(page).to have_content('ClarkA Kent')
    end
  end

  click_on('Sort')
  click_on('Sort')

  within('.ideas') do
    within first('h1') do
      expect(page).to have_content('Bruce Wayne')
    end
  end

  end

end
