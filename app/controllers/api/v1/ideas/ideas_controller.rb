class Api::V1::Ideas::IdeasController < Api::ApiController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def update
    idea = Idea.find(params[:id])
    respond_with idea.update(idea_params)
  end

  def destroy
    respond_with Idea.find(params[:id]).destroy
  end

  private

  def idea_params
    params.require(:postParams).permit(:title, :body, :quality)
  end

end
