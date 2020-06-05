class Api::VotesController < ApplicationController
  def create
    @vote = Vote.new
    @vote.user_id = current_user.id
    @vote.question_id = params[:question_id]
    if already_voted?
      render json: ['User has already voted'], status: 422
    elsif @vote.save
      render :show
    else
      render json: ['Vote cannot be created'], status: 422
    end
  end

  # find the vote
  # update vote number
  def update
    @vote = Vote.where(user_id: current_user.id, question_id: params[:question_id])
    if !already_voted?
      render json: ['Vote has not been made'], status: 422
    elsif already_voted? && @vote.update(vote_params)
      render :show
    else
      render json: ['Vote cannot be updated'], status: 422
    end
  end

  private
  def already_voted?
    Vote.where(user_id: current_user.id, question_id: params[:question_id]).exists?
  end

  def vote_params
    params.require(:vote).permit(:vote_type);
  end




end
