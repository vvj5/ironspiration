class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_email(params[:name])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { message: "You logged-in! You are AMA-ZA-ZING!" }
    else
      render json: { message: "Sorry, you username or email did not match. :( " }
    end
  end

  def destroy
    session[:user_id] = nil
    render json: { message: "You logged-out successfully. Ciao!" }
  end

end
