var CommentModel = Backbone.Model.extend({
	defaults: {
		_id: null,
		user_id: null,
		body: null,
		createdAt: null,
		project_id: null
	},
	urlRoot: 'http://ironspiration.herokuapp.com/comments',
	idAttribute: '_id',

	// validate: function(attr, options) {
	// 	if (!attrs.user_id) {
 //            return 'Please add username.';
 //        }
	// 	else if(attr.title.length === 0){
	// 		return 'A title must be present';
	// 	}
	// 	else if(attr.body.length === 0){
	// 		return 'A body must be present';
	// 	}
	// 	else if(attr.location.length === 0){
	// 		return 'A location must be present';
	// 	}
	// 	else if(attr.project_url.length === 0){
	// 		return 'A project link must be present';
	// 	}
	// 	return false;
});
