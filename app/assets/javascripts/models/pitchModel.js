var PitchedModel = Backbone.Model.extend({
    defaults: {
        _id: null,
        title: null,
        body: '',
        createdAt: null,
    },
    urlRoot: 'http://ironspiration.herokuapp.com/',
    idAttribute: '_id'

    // validate: function(attr) {

    // }
});