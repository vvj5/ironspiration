class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]
skip_before_action :verify_authenticity_token
  # GET /projects
  # GET /projects.json
  def index
    @project = Project.all
    render json: @project.order(:created_at).reverse
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    render json: Project.where(id: params.fetch(:id))
  end

# GET /projects/
  def pitches
    @project = Project.all
    render json: @project.where(type: 'pitch')
    # order(:created_at).reverse
  end

  # GET /projects/new
  def new
    @project = Project.new
    render json: @project
  end


  # POST /projects
  # POST /projects.json
    def create
      @project = Project.new
      @project[:category] = params[:project][:image_link]
      @project[:title] = params[:project][:title] 
      @project[:body] = params[:project][:body] 
      @project[:location] = params[:project][:location] if params[:project][:category] == 1
      @project[:image_link] = params[:project][:image_link] if params[:project][:category] == 1
      @project[:project_url] = params[:project][:project_url] if params[:project][:category] == 1
      @project[:year] = params[:project][:year] if params[:project][:category] == 1
      @project[:likes] = params[:project][:likes] if params[:project][:category] == 1
      @project.save
  
      render json: @project
    end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.

    # def project_params
    #   params.require(:project).permit(:title, :body, :location, :image_link, :project_url, :year, :likes)
    # end
end
