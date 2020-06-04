class Api::VotesController < ApplicationController
  def create
    @vote = Vote.new
    @vote.user_id = current_user.id
    @vote.question_id = params[:id]
    
  end

  def destroy

  end

  def update

  end

end
