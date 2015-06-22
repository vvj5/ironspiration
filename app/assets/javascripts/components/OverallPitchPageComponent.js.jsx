var OverallPitchPageComponent = React.createClass({
	render: function () {
		return (
			<div>
				<header>
					<div className="logo">
						<a href="#home"><img src="http://i.imgur.com/lCTMp9r.png"/></a>
					</div>
				</header>

				<nav>
					<ul>
						<li>
							<a className="login-link" href="#login">LOGIN</a> | 
						</li>
						<li>
							<a href="#pitch-form">SUBMIT</a> | 
						</li>
						<li>
							<a href="#pitch-page"><span>PITCHES</span></a>
						</li>
					</ul>
				</nav>
				<PitchListComponent />
			</div>
		);
	}
});

