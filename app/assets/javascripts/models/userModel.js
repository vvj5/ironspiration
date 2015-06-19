// var Backbone = require('backbone');
// Backbone.$ = require('jquery');

var userModel = Backbone.Model.extend({
    defaults: {
        _id: null,
        username: null,
        password: '',
        createdAt: null,
    },
    urlRoot: '',
    idAttribute: '_id'

    // validate: function(attr) {

    // }
});