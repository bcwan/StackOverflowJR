class Api::UpvotesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    if already_voted?
      render json: ['User has an upvote already'], status: 422
    else
      if has_downvote?
        @downvote = Downvote.find_by(user_id: current_user.id, question_id: params[:question_id])
        @downvote = Downvote.delete(@downvote.id)
      end
      # @upvote = Upvote.new
      byebug
      @upvote = Upvote.new(upvote_params)
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

  # if user clicks on upvote
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
    byebug
    Upvote.where(user_id: current_user.id, question_id: params[:question_id]).exists?
  end

    # helper method that checks to see there's nothing in Downvotes
  def has_downvote?
    byebug
    Downvote.where(user_id: current_user.id, question_id: params[:question_id]).exists?
  end
  
  def upvote_params
    byebug
    params.require(:upvote).permit(:answer_id)
  end

end
