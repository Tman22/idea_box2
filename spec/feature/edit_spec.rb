RSpec.feature 'Edit', type: :feature do
  include WaitForAjax
  fixtures :ideas

  it 'EditInline', js: true do
    idea = ideas(:one)

    visit '/'
    wait_for_ajax
    find("#title-2").click
    find("#title-2").native.send_keys('A')
    within("#idea-#{idea.id}") do
      click_on('UP')
    end
    wait_for_ajax

    expect(page).to have_content('ClarkA Kent')
    expect(Idea.last.title).to eq('ClarkA Kent')
  end
end
