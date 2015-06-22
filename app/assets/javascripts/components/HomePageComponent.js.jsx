var HomePageComponent = React.createClass({
	render: function () {
		return (
		<div className="container">
			<header>
				<div className="logo">
					<a href="#home"><img src="http://i.imgur.com/lCTMp9r.png"/></a>
				</div>
			</header>
			<nav>
				<ul>
					<li>
						<a href="#login">LOGIN</a> | 
					</li>
					<li>
						<a href="#project-form"> SUBMIT</a> | 
					</li>
					<li>
						<a href="#pitch-page"> PITCHES</a>
					</li>
				</ul>
				<p>This is Ironspiration, an app where students of The Iron Yard can get ideas and inspiration from the past projects and pitches of previous TIY students.</p>
			</nav>
			<div>
				<ImageListComponent />
			</div>

			<footer>
				<p><a href="https://github.com/chaneyz">Zack Chaney</a> | <a href="https://twitter.com/dalywebdev">Rob Daly</a> | <a href="https://github.com/vvj5">Will Sherman</a> | <a href="https://github.com/andreastclair">Andrea St. Clair</a></p>
			</footer>
			
		</div>
		);
	}
});
