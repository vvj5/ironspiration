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
      project = Project.create(category: params.fetch(:type), title: params.fetch(:title), body: params.fetch(:body), location: params.fetch(:location), image_link: params.fetch(:image_link), project_url: params.fetch(:project_url), year: params.fetch(:year), likes: params.fetch(:likes))
      render json: project
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
