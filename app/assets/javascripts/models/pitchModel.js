var PitchedModel = Backbone.Model.extend({
    defaults: {
        _id: null,
        title: null,
        body: null,
        createdAt: null,
        category: 2
    },
    urlRoot: 'http://ironspiration.herokuapp.com/projects',
    idAttribute: '_id'

    // validate: function(attr) {

    // }
});