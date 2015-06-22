var UserModel = Backbone.Model.extend({
	defaults: {
		_id: null,
		name: null,
		password: null,
		password_confirmation: null,
		created_at: null,
		email: 'test@gmail.com'
	},
	urlRoot: '/users',
	idAttribute: '_id'

	// validate: function(attr) {
	// 	if (!attrs.name) {
 //            return 'Please add username.';
 //        }
 //        if (!attrs.password) {
 //            return 'Please add password.';
 //        }
 //        if (!attrs.password_confirmation) {
 //            return 'Please confirm password.';
 //        }
	// }
});