var ImageAndTitleComponent = React.createClass({
	render: function () {
		return (
			<section>	
				<div className="project-photo">
					<h1>PROJECT TITLE</h1>
					<img src="images/bill-squared.jpg"/>
					<CommentListComponent />
					<CommentFormComponent />
				</div>
			</section>	
		);
	}
});