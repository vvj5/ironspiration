var CommentCollection = Backbone.Collection.extend({
    model: CommentModel,
    url: 'http://ironspiration.herokuapp.com/comments'
});