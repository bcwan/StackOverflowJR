class Api::UpvotesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    if already_voted?
      byebug
      render json: ['User has an upvote already'], status: 422
    else
      if has_downvote?
        byebug
        @downvote = Downvote.find_by(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:upvote][:answer_id])
        @downvote = Downvote.delete(@downvote.id)
        byebug
      end
      byebug
      @upvote = Upvote.new(upvote_params)
      @upvote.user_id = current_user.id
      @upvote.question_id = params[:question_id]
      if @upvote.answer_id != 0
        byebug
        if @upvote.save!
          byebug
          @answer = @upvote.answer
          render 'api/answers/show'
        else
          byebug
          render json: ['Cannot upvote answer'], status: 422
        end
      else
        if @upvote.save
          byebug
          @question = @upvote.question
          render 'api/questions/show'
        else
          byebug
          render json: ['Cannot upvote question'], status: 422
        end
      end
    end

  end

  # if user clicks on upvote
  def destroy
    #@upvote = Upvote.find_by(user_id: current_user.id, question_id: params[:question_id])
    @upvote = Upvote.find_by(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:upvote][:answer_id])
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
    #Upvote.where(user_id: current_user.id, question_id: params[:question_id]).exists?
    Upvote.where(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:upvote][:answer_id]).exists?
  end

    # helper method that checks to see there's nothing in Downvotes
  def has_downvote?
    #Downvote.where(user_id: current_user.id, question_id: params[:question_id]).exists?
    Downvote.where(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:upvote][:answer_id]).exists?
  end
  
  def upvote_params
    params.require(:upvote).permit(:answer_id)
  end

end
