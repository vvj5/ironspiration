var ProjectModel = Backbone.Model.extend({
    defaults: {
        _id: null,
        user_id: null,
        image_link: '',
        title: null,
        body: null,
        location: null,
        year: null,
        project_url: null,
        created_at: null,
        type: "project",
        likes: 0
    },
    urlRoot: '/projects',
    idAttribute: '_id'

    // validate: function(attr) {

    // }
});