json.array!(@projects) do |project|
  json.extract! project, :id, :title, :body, :location, :image_link, :project_url, :year, :likes
  json.url project_url(project, format: :json)
end
