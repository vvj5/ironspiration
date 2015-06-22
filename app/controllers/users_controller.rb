class UsersController < ApplicationController

  # GET /users
  # GET /users.json
  def index
    @user = User.all
    render json: @user
  end

  # GET /users/1
  # GET /users/1.json
  def show
    render json: User.where(id: params.fetch(:id))
  end

  # GET /users/new
  def new
    @user = User.new
    render json: @user
  end

  # POST /users
  # POST /users.json
   def create
      @user = User.new
      @user[:name]     = params[:name]
      @user[:email]    = params[:email]
      @user[:password] = params[:password]
      # @user[:password_confirmation] = params[:password_confirmation]
      @user.save

      render json: @user
  end


  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:name, :password, :password_confirmation)
    end

end
