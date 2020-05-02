class Api::AnswersController < ApplicationController

  # we want user to be logged in in order to manage his/her own answers
  before_action :require_logged_in, only: [:update, :destroy, :create]

  def index
    
  end



end
