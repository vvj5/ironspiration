var CommentModel = Backbone.Model.extend({
    defaults: {
        _id: null,
        user_id: null,
        body: null,
        createdAt: null,
        project_id: null
    },
    urlRoot: '/comments',
    idAttribute: '_id'

    // validate: function(attr) {

    // }
});