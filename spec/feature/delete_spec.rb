RSpec.feature 'Deleting an Idea', type: :feature do
  include WaitForAjax
  fixtures :ideas

  it 'deleteListener and deleteIdea', js: true do
    visit '/'
    click_on('delete-1')

    expect(page).to have_content('Clark Kent')
    expect(page).to have_no_content('Bruce Wayne')
    expect(Idea.all.count).to eq(2)
  end
end
