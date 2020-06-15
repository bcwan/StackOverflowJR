class Api::DownvotesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    if already_voted?
      byebug
      render json: ['User has an downvote already'], status: 422
    else
      if has_upvote?
        byebug
        @upvote = Upvote.find_by(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:downvote][:answer_id])
        @upvote = Upvote.destroy(@upvote.id)
      end
      byebug
      @downvote = Downvote.new(downvote_params)
      @downvote.user_id = current_user.id
      @downvote.question_id = params[:question_id]
      if @downvote.answer_id != 0
        byebug
        if @downvote.save
          byebug
          @answer = @downvote.answer
          render 'api/answers/show'
        else
          byebug
          render json: ['Cannot downvote answer'], status: 422
        end
      else
        if @downvote.save
          byebug
          @question = @downvote.question
          render 'api/questions/show'
        else
          byebug
          render json: ['Cannot downvote question'], status: 422
        end
      end
    end

  end

  def destroy
    @downvote = Downvote.find_by(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:downvote][:answer_id])
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
    byebug
    Downvote.where(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:downvote][:answer_id]).exists?
  end

  # helper method that checks to see there's nothing in Upvotes
  def has_upvote?
    byebug
    Upvote.where(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:downvote][:answer_id]).exists?
  end

  def downvote_params
    params.require(:downvote).permit(:answer_id)
  end

end
