class ApplicationController < ActionController::Base
skip_before_action :verify_authenticity_token
protect_from_forgery with: :null_session

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
      flash[:alert] = "Sorry, you need to be logged in to do that!"
      redirect_to login_path
    end
  end

end
