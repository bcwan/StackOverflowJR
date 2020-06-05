class Api::UpvotesController < ApplicationController

  # if user hasn't done an upvote, create upvote
  def create
    @upvote = Upvote.new
    @upvote.user_id = current_user.id
    @upvote.question_id = params[:question_id]
    if @upvote.save
      render 'api/questions/show'
    else
      render json: ['Cannot be upvoted'], status: 422
    end

  end

  def destroy

  end

  private
  
  def already_voted?
    Upvote.where(user_id: current_user.id, question_id: params[:question_id]).exists?
  end
  
end
