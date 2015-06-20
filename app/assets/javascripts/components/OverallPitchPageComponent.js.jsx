var OverallPitchPageComponent = React.createClass({
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
				<PitchListComponent />
			</div>
		);
	}
});

<nav>
	<ul>
		<li>
			<a class href="submit-pitch.html">SUBMIT</a> | 
		</li>
		<li>
			<a href="#"><span>PITCHES</span></a>
		</li>
	</ul>
</nav>