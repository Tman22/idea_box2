RSpec.feature 'Edit', type: :feature do
  include WaitForAjax
  fixtures :ideas

  it 'EditInline', js: true do
    idea = ideas(:one)

    visit '/'
    find("#title-2").click
    find("#title-2").native.send_keys('A')
    within("#idea-#{idea.id}") do
      click_on('UP')
    end
    wait_for_ajax
    
    expect(page).to have_content('Clark KentA')
    expect(Idea.last.title).to eq('Clark KentA')
  end
end
