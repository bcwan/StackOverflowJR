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
    
  end

  def edit

  end

  def update

  end

  def destroy

  end

  def questions_params
    params.require(:question).permit(:title, :description)
  end


end
