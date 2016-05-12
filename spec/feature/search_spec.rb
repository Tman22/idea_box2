RSpec.feature 'Search', type: :feature do
  include WaitForAjax
  fixtures :ideas

  it 'searchListener', js: true do

    visit '/'
    wait_for_ajax
    fill_in 'Search', with: 'Bruce Wayne'

    expect(page).to have_content('Bruce Wayne')
    expect(page).to have_no_content('Clark Kent')

    visit '/'
    wait_for_ajax
    fill_in 'Search', with: 'parents'

    expect(page).to have_content('Bruce Wayne')
    expect(page).to have_content('ClarkA Kent')
  end

end
