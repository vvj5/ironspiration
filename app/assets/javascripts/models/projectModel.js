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
        likes: 0,
        type: 1
    },
    urlRoot: '/projects',
    idAttribute: '_id'

    // validate: function(attr) {

    // }
});