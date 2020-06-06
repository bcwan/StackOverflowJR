class Api::UpvotesController < ApplicationController

  # if user hasn't done an upvote, create upvote
  # also return a boolean if user upvoted quesiton in show page
  def create
    if already_voted?
      render json: ['User has an upvote already'], status: 422
    else
      @upvote = Upvote.new
      @upvote.user_id = current_user.id
      @upvote.question_id = params[:question_id]
      if @upvote.save
        @question = @upvote.question
        render 'api/questions/show'
      else
        render json: ['Cannot upvote'], status: 422
      end
    end

  end

  # if user clicks on downvote
  def destroy
    @upvote = Upvote.find_by(user_id: current_user.id, question_id: params[:question_id])
    if @upvote.nil?
      render json: ['Upvote cannot be found or user did not upvote'], status: 422
    else
      @question = @upvote.question
      if @upvote.destroy
        render 'api/questions/show'
      else 
        render json: ['Upvote is not destroyed'], status: 422
      end
    end
  end

  private
  
  def already_voted?
    Upvote.where(user_id: current_user.id, question_id: params[:question_id]).exists?
  end
  
end
