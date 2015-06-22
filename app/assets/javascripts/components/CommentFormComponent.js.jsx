var commentList = new CommentCollection();
var CommentFormComponent = React.createClass({
    render: function () {
        return (
          <div>
          	<textarea ref="comment"></textarea>
          	<button onClick={this.postComment} type="submit">Add Comment</button>
          </div>
        );
    },
    postComment: function(e) {
    	e.preventDefault();
		var comment = new CommentModel({
			body: this.refs.comment.getDOMNode().value
		});
		comment.save();
		commentList.add(comment);
    }
});