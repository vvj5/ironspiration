var OverallPitchPageComponent = React.createClass({
<<<<<<< HEAD
	render: function () {
		return (
			<div>
				<h1> Pitch Description Page </h1>
				<a href='#home'>home</a>
				<div>
					<a href='#login'>Login</a>
				</div>
				<div>
					<a href='#pitch-form'>Add Pitch</a>
					<a href='#home'>Projects List</a>
				</div>
			</div>
		);
	}
=======
    render: function () {
        return (
          <div>
            <a href='#home'>home</a>
            <PitchListComponent />
          </div>
        );
    }
>>>>>>> eb274930021ddf093fc5417b07d222c3fef6f2cd
});