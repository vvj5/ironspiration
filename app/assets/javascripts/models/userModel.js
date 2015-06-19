var UserModel = Backbone.Model.extend({
    defaults: {
        _id: null,
        username: null,
        password: '',
        created_at: null,
    },
    urlRoot: 'http://ironspiration.herokuapp.com/',
    idAttribute: '_id'

    // validate: function(attr) {

    // }
});