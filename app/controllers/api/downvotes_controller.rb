class Api::DownvotesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    if already_voted?
      render json: ['User has an downvote already'], status: 422
    else
      if has_upvote?
        @upvote = Upvote.find_by(user_id: current_user.id, question_id: params[:question_id])
        @upvote = Upvote.destroy(@upvote.id)
      end
     # @downvote = Downvote.new
      @downvote = Downvote.new(downvote_params)
      @downvote.user_id = current_user.id
      @downvote.question_id = params[:question_id]
      if @downvote.save
        @question = @downvote.question
        render 'api/questions/show'
      else
        render json: ['Cannot downvote'], status: 422
      end
    end

  end

  def destroy
    @downvote = Downvote.find_by(user_id: current_user.id, question_id: params[:question_id])
    if @downvote.nil?
      render json: ['Downvote cannot be found or user did not downvote'], status: 422
    else
      @question = @downvote.question
      if @downvote.destroy
        render 'api/questions/show'
      else 
        render json: ['Downvote is not destroyed'], status: 422
      end
    end
  end
  
  private

  def already_voted?
    Downvote.where(user_id: current_user.id, question_id: params[:question_id]).exists?
  end

  # helper method that checks to see there's nothing in Upvotes
  def has_upvote?
    Upvote.where(user_id: current_user.id, question_id: params[:question_id]).exists?
  end

  def downvote_params
    params.require(:downvote).permit(:type)
  end

end
