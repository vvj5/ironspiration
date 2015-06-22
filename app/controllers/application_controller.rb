class ApplicationController < ActionController::Base
skip_before_action :verify_authenticity_token

  before_filter :current_user

  def current_user
    if @current_user.nil?
      if session[:user_id].present?
        @current_user = User.find(session[:user_id])
      end
    else
      @current_user
    end
  end

  def authenticate_user!
    unless current_user
      render json: { message: "Sorry, you need to be logged in to do that!" }
    end
  end

end
