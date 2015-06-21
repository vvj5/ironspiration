class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
skip_before_action :verify_authenticity_token
  # GET /comments
  # GET /comments.json
  def index
    @comment = Comment.all
    render json: @comment
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
    render json: Comment.where(id: params.fetch(:id))
  end

  # GET /comments/new
  def new
    @comment = Comment.new
    render json: @comment
  end

  # GET /comments/1/edit
  def edit
  end

  # POST /comments
  # POST /comments.json
  def create
    comment = Comment.create(body: params.fetch(:body), project_id: params.fetch(:project_id), user_id: params.fetch(:user_id))
    render json: comment
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    # def comment_params
    #   params.require(:comment).permit(:body, :user_id)
    # end
end
