var CommentFormComponent = React.createClass({
    render: function () {
        return (
          <div>
          	<textarea ref="comment"></textarea>
          	<button onClick={this.postComment} type="submit">Add Comment</button>
          </div>
        );
    }
});