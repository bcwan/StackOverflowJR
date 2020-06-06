class Api::DownvotesController < ApplicationController

  # if user hasn't done an downvote, create downvote
  # also return a boolean if user downvoted quesiton in show page
  def create
    if already_voted?
      render json: ['User has an downvote already'], status: 422
    else
      @downvote = Downvote.new
      # @downvote.user_id = current_user.id
      @downvote.user_id = 2
      @downvote.question_id = params[:question_id]
      byebug
      if @downvote.save
        @question = @downvote.question
        render 'api/questions/show'
      else
        render json: ['Cannot downvote'], status: 422
      end
    end

  end

  def destroy

  end
  
  private
    def already_voted?
    # Downvote.where(user_id: current_user.id, question_id: params[:question_id]).exists?
      Downvote.where(user_id: 2, question_id: params[:question_id]).exists?
    end

end
