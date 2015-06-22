var CommentListComponent = React.createClass({
	render: function () {
		return (
			<section>
				<div className="comment-box">
					<CommentListComponent />
					<CommentFormComponent />
				</div>
			</section>
		);
	}
});