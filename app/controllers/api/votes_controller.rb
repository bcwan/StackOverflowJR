class Api::VotesController < ApplicationController
  def create
    @vote = Vote.new
    @vote.user_id = current_user.id
    @vote.question_id = params[:id]
    if @vote.save
      render :show
    else
      render json: ['Vote cannot be updated'], status: 422
    end
  end

  
  def destroy

  end

  def update

  end

end
