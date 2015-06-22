var UserModel = Backbone.Model.extend({
	defaults: {
		_id: null,
		name: null,
		password: null,
		password_confirmation: null,
		created_at: null,
		email: 'test@gmail.com'
	},
	urlRoot: 'http://ironspiration.herokuapp.com/users',
	idAttribute: '_id'
});