var UserModel = Backbone.Model.extend({
    defaults: {
        _id: null,
        username: null,
        password: '',
        created_at: null,
    },
    urlRoot: '',
    idAttribute: '_id'

    // validate: function(attr) {

    // }
});