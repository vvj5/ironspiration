var HomePageComponent = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Home Page </h1>
				<a href='#home'>home</a>
				<div>
					<a href='#login'>Login</a>
				</div>
				<div>
					<a href='#project-form'>Add Project</a>
					<a href='#pitch-page'>Pitches</a>
				</div>
				<ImageListComponent />
			</div>
		);
	}
});
