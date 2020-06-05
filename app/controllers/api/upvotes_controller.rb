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

  # if user clicks on downvote
  def destroy
    @upvote = Upvote.find_by(user_id: current_user.id, question_id: params[:question_id])
    if @upvote.nil?
      render json: ['Upvote cannot be found'], status: 422
    else
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
