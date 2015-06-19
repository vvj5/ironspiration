var OverallProjectPageComponent = React.createClass({
	render: function () {
		return (
			<div>
				<div>
					<a href='#login'>Login</a>
				</div>
				<div>
					<a href='#pitch-page'>Pitch List</a>
					<a href='#home'>Projects List</a>
				</div>
				<ImageAndTitleComponent />
				<ProjectDescriptionComponent />
			</div>
		);
	}
});