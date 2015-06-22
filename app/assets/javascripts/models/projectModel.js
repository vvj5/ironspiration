var ProjectModel = Backbone.Model.extend({
	defaults: {
		_id: null,
		user_id: null,
		image_link: '',
		title: null,
		body: null,
		location: null,
		year: null,
		project_url: null,
		created_at: null,
		likes: 0,
		category: 1
	},
	urlRoot: '/projects',
	idAttribute: '_id',
	validate: function(attr, options) {
		if(attr.image_link.length === 0){
			return 'A photo link must be present';
		}
		else if(attr.title.length === 0){
			return 'A title must be present';
		}
		else if(attr.body.length === 0){
			return 'A body must be present';
		}
		else if(attr.location.length === 0){
			return 'A location must be present';
		}
		else if(attr.project_url.length === 0){
			return 'A project link must be present';
		}
		return false;
	}
});

