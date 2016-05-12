require "spec_helper"

RSpec.describe Idea, type: :model do
  fixtures(:ideas)
  it {should validate_presence_of(:title)}
  it {should validate_presence_of(:body)}

    it "last idea is the one most recently updated_at" do
      idea = ideas(:one)
      idea2 = ideas(:two)
      idea3 = Idea.create(title: 'computers', body: 'Turing')

      ideas = Idea.ordered_list
      expect(ideas.first).to eq(idea)
      expect(ideas.last).to eq(idea3)

      idea.update(title: 'woot')
      ideas = Idea.ordered_list
      expect(ideas.first).to eq(idea2)
      expect(ideas.last).to eq(idea)

  end
end
