var ProjectModel = Backbone.Model.extend({
    defaults: {
        _id: null,
        user_id: null,
        image_url: '',
        title: null,
        body: null,
        location: null,
        year: null,
        project_url: null,
        created_at: null,
        likes: 0
    },
    urlRoot: '',
    idAttribute: '_id'

    // validate: function(attr) {

    // }
});