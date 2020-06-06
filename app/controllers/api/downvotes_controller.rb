class Api::DownvotesController < ApplicationController

  def create

  end

  def destroy

  end
  
  private
    def already_voted?
    # Upvote.where(user_id: current_user.id, question_id: params[:question_id]).exists?
      Downvote.where(user_id: 2, question_id: params[:question_id]).exists?
    end

end
