class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_url, notice: 'You logged in successfully! *high five*'
    else
      flash[:alert] = "Sorry, you username or email did not match."
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: 'You logged-out successfully. Ciao!'
  end

end
