var PitchedModel = Backbone.Model.extend({
    defaults: {
        _id: null,
        title: null,
        body: null,
        createdAt: null,
        type: 'pitch'
    },
    urlRoot: '/projects',
    idAttribute: '_id'

    // validate: function(attr) {

    // }
});