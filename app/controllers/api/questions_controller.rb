class Api::QuestionsController < ApplicationController

  # we want user to be logged in in order to manage his/her own questions
  before_action :require_logged_in, only: [:update, :destroy, :create]

  # we'll display all questions for now
  def index
    @questions = Question.all
    render :index
  end

  def show
    @question = Question.find(params[:id])
    render :show
  end

  def create
    @question = current_user.questions.new(question_params)
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      render json: @question
    else
      render json: @question.errors.full_messages, status: 422
  end

  def destroy
    @question = current_user.questions.find(params[:id])
    @question.destroy
    render json: @question
  end

  private
  def question_params
    params.require(:question).permit(:title, :description)
  end


end
