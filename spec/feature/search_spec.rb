RSpec.feature 'Search', type: :feature do
  include WaitForAjax
  fixtures :ideas

  it 'searchListener', js: true do

    visit '/'
    fill_in 'Search', with: 'Bruce Wayne'

    expect(page).to have_content('Bruce Wayne')
    expect(page).to have_no_content('Clark Kent')

    visit '/'
    fill_in 'Search', with: 'parents'

    expect(page).to have_content('Bruce Wayne')
    expect(page).to have_content('Clark KentA')
  end

end
