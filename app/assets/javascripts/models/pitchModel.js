var PitchedModel = Backbone.Model.extend({
    defaults: {
        _id: null,
        title: null,
        body: '',
        createdAt: null,
    },
    urlRoot: '',
    idAttribute: '_id'

    // validate: function(attr) {

    // }
});