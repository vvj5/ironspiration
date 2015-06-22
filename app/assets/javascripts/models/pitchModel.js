var PitchedModel = Backbone.Model.extend({
    defaults: {
        _id: null,
        title: null,
        body: null,
        createdAt: null,
        category: 2
    },
    urlRoot: 'http://ironspiration.herokuapp.com/projects',
    idAttribute: '_id',

    // validate: function(attr, options) {
    //     else if(attr.title.length === 0){
    //         return 'A title must be present';
    //     }
    //     else if(attr.body.length === 0){
    //         return 'A body must be present';
    //     }
    //     return false;
});