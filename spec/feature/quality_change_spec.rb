RSpec.feature 'Quality', type: :feature do
  include WaitForAjax
  fixtures :ideas

  it 'thumbs-up', js: true do
    idea = ideas(:one)

    visit '/'

    expect(page).to have_content('awesome')
    within("#idea-#{idea.id}") do
      click_on('UP')
      expect(page).to have_content('genius')
    end
    expect(page).to have_no_content('awesome')

    idea = Idea.first
    expect(idea.quality).to eq('genius')
  end


  it 'thumbs-down', js: true do
    idea = ideas(:two)

    visit '/'
    within("#idea-#{idea.id}") do
      click_on('Down')
      click_on('Down')
    end

    idea = Idea.last
    expect(page).to have_content('cool')
    expect(idea.quality).to eq('cool')
  end

end
