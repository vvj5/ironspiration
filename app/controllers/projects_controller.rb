class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

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

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  # POST /projects.json
  # def create
  #   @project = Project.create(project_params)

  #   respond_to do |format|
  #     if @project.save
  #       format.html { redirect_to @project, notice: 'Project was successfully created.' }
  #       format.json { render :show, status: :created, location: @project }
  #     else
  #       format.html { render :new }
  #       format.json { render json: @project.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

    def create
    # begin
      project = Project.create(title: params.fetch(:title), body: params.fetch(:body), location: params.fetch(:location), image_link: params.fetch(:image_link), project_url: params.fetch(:project_url), year: params.fetch(:year), likes: params.fetch(:likes))
      render json: project
    # rescue ActionController::ParameterMissing => error
    #   render json: { error: error.message }, status: 422
    # end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to @project, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
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
