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
    @question = Question.new(question_params)
    @question.questioner_id = current_user.id 
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = Question.find_by(id: params[:id])
    if @question.questioner_id == current_user.id && @question.update(question_params)
      render :show
    else
      render json: ['Question cannot be updated'], status: 422
  end

  def destroy
    # @question = current_user.questions.find_by(params[:id])
    @question = Question.find_by(id: params[:id])
    if @question.nil?
      render json: ['Question cannot be found'], status: 422
    else
      if current_user.id == @question.questioner_id
        @question.destroy
        render :show
      else
        render json: ['Question was not destroyed'], status: 422
      end
  end

  private
  def question_params
    params.require(:question).permit(:title, :description)
  end


end
