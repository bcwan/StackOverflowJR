class Api::QuestionsController < ApplicationController

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

  # current_user's questions
  def self
    @questions = Question.where(questioner_id: current_user.id)
    render :self
  end

  # search questions
  def search
    search = question_search_params[:keywords]
    search_length = search.split("+").length
    parse_search = search.split("+")
    @questions = Question.where(
                  [
                    (['title LIKE ?'] * search_length)
                    .join(' OR ')
                  ] + parse_search.map { |word| "%#{word}%" }
    )
    render :search
  end


  # only user logged in can ask questions
  # make sure that description is 30 letters more
  def create
    @question = Question.new(question_params)
    @question.questioner_id = current_user.id 
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  # question creator can only update their own question
  def update
    @question = Question.find_by(id: params[:id])
    if @question.questioner_id == current_user.id && @question.update(question_params)
      render :show
    else
      render json: ['Question cannot be updated'], status: 422
    end
  end

  # only user who created can destroy a question
  def destroy
    @question = Question.find_by(id: params[:id])
    if @question.nil?
      render json: ['Question cannot be found'], status: 422
    else
      if current_user.id == @question.questioner_id
        @question.destroy
        render :show
      else
        render json: ['Question is not destroyed'], status: 422
      end
    end
  end

  private

  def question_params
    params.require(:question).permit(:title, :description)
  end

  def question_search_params
    params.require(:words).permit(:keywords)
  end

end
