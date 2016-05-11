RSpec.feature 'Quality', type: :feature do
  include WaitForAjax
  fixtures :ideas

  it 'thumbs-up', js: true do
    idea = ideas(:one)

    visit '/'
    within("#idea-#{idea.id}") do
      click_on('UP')
    end

    idea = Idea.first
    expect(page).to have_content('awesome')
    expect(idea.quality).to eq('awesome')
  end


  it 'thumbs-down', js: true do
    idea = ideas(:two)

    visit '/'
    within("#idea-#{idea.id}") do
      click_on('UP')
      click_on('Down')
      click_on('Down')
    end

    idea = Idea.last
    expect(page).to have_content('cool')
    expect(idea.quality).to eq('cool')
  end

end
