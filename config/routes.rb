Rails.application.routes.draw do
  resources :comments
  resources :users
  resources :projects
  root 'application#index'
end



#   comments GET    /comments(.:format)          comments#index
#              POST   /comments(.:format)          comments#create
#  new_comment GET    /comments/new(.:format)      comments#new
# edit_comment GET    /comments/:id/edit(.:format) comments#edit
#      comment GET    /comments/:id(.:format)      comments#show
#              PATCH  /comments/:id(.:format)      comments#update
#              PUT    /comments/:id(.:format)      comments#update
#              DELETE /comments/:id(.:format)      comments#destroy

#        users GET    /users(.:format)             users#index
#              POST   /users(.:format)             users#create
#     new_user GET    /users/new(.:format)         users#new
#    edit_user GET    /users/:id/edit(.:format)    users#edit
#         user GET    /users/:id(.:format)         users#show
#              PATCH  /users/:id(.:format)         users#update
#              PUT    /users/:id(.:format)         users#update
#              DELETE /users/:id(.:format)         users#destroy

#     projects GET    /projects(.:format)          projects#index
#              POST   /projects(.:format)          projects#create
#  new_project GET    /projects/new(.:format)      projects#new
# edit_project GET    /projects/:id/edit(.:format) projects#edit
#      project GET    /projects/:id(.:format)      projects#show
#              PATCH  /projects/:id(.:format)      projects#update
#              PUT    /projects/:id(.:format)      projects#update
#              DELETE /projects/:id(.:format)      projects#destroy
#         root GET    /                            application#index
