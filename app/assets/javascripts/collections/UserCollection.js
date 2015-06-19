var UserCollection = Backbone.Collection.extend({
    model: UserModel,
    url: 'http://ironspiration.herokuapp.com/users'
});