var ProjectCollection = Backbone.Collection.extend({
    model: ProjectModel,
    url: '/projects'
});